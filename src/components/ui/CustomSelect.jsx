import { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaCheck } from 'react-icons/fa'

const CustomSelect = ({
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Update label when value changes
  useEffect(() => {
    const selected = options.find((opt) => opt.value === value)
    setSelectedLabel(selected ? selected.label : '')
  }, [value, options])

  const handleSelect = (option) => {
    onChange({ target: { name, value: option.value } })
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-left text-sm transition-all flex items-center justify-between ${
          isOpen
            ? 'border-green bg-white/10'
            : 'border-white/10 hover:border-white/30'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span className={selectedLabel ? 'text-white' : 'text-white/30'}>
          {selectedLabel || placeholder}
        </span>
        <FaChevronDown
          className={`text-white/60 text-xs transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-green' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-2 rounded-lg border border-white/10 shadow-2xl overflow-hidden animate-fade-in"
          style={{ backgroundColor: '#0B101B' }}
        >
          {/* Scrollable Options */}
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left text-sm transition-all flex items-center justify-between hover:bg-green/10 ${
                  value === option.value
                    ? 'bg-green/20 text-green'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <FaCheck className="text-green text-xs" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomSelect