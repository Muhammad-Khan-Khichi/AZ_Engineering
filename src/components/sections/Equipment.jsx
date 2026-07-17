import { useState } from 'react'
import {
  FaCog,
  FaBolt,
  FaWrench,
  FaPlug,
  FaChartLine,
  FaMicrochip,
  FaTools,
  FaIndustry,
  FaServer,
  FaSearch,
} from 'react-icons/fa'
import { equipment } from '../../data/equipment'
import SectionHeader from '../ui/SectionHeader'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// Icon mapping based on equipment type
const getIcon = (iconName) => {
  const icons = {
    cog: FaCog,
    bolt: FaBolt,
    wrench: FaWrench,
    plug: FaPlug,
    chart: FaChartLine,
    chip: FaMicrochip,
    tools: FaTools,
    industry: FaIndustry,
    server: FaServer,
  }
  return icons[iconName] || FaTools
}

const Equipment = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', ...new Set(equipment.map(item => item.category))]

  const filteredEquipment = equipment.filter(item => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="equipment" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Resources"
          title="Equipment & Tools"
          subtitle="Professional equipment and tools that enable us to deliver quality engineering solutions."
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="group relative overflow-hidden bg-gradient-to-br from-navy to-navy-light text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <FaIndustry className="text-lg" />
              </div>
              <div className="text-3xl font-bold mb-1">{equipment.length}</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Total Items</div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-green to-green-dark text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <FaChartLine className="text-lg" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {equipment.reduce((sum, item) => sum + (item.qty || 0), 0)}
              </div>
              <div className="text-xs uppercase tracking-wider opacity-80">Total Units</div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white border-2 border-navy/10 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-navy/5 rounded-full -mr-10 -mt-10"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center mb-3">
                <FaTools className="text-lg" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">
                {categories.length - 1}
              </div>
              <div className="text-xs uppercase tracking-wider text-navy-lighter">Categories</div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-white border-2 border-green/20 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green/5 rounded-full -mr-10 -mt-10"></div>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-green/10 text-green flex items-center justify-center mb-3">
                <FaBolt className="text-lg" />
              </div>
              <div className="text-3xl font-bold text-green mb-1">100%</div>
              <div className="text-xs uppercase tracking-wider text-navy-lighter">Operational</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${
                  activeTab === category
                    ? 'bg-navy text-white shadow-md scale-105'
                    : 'bg-white text-navy-lighter hover:bg-gray-50 border border-gray-200 hover:border-navy/30'
                }`}
              >
                {category === 'all' ? 'All Equipment' : category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-auto md:min-w-[280px]">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-lighter text-sm" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
            />
          </div>
        </div>

        {/* Equipment Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {filteredEquipment.map((item) => {
            const IconComponent = getIcon(item.icon)
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green/0 via-green/0 to-navy/0 group-hover:from-green/5 group-hover:to-navy/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>

                {/* Top Row */}
                <div className="flex items-start justify-between mb-5 relative">
                  <div className="flex items-center gap-2">
                    {/* <span className="text-xs font-bold text-navy-lighter/70 tracking-widest">
                      ID
                    </span>
                    <span className="text-sm font-bold text-navy bg-gray-100 px-2.5 py-1 rounded-md">
                      #{String(item.id).padStart(3, '0')}
                    </span> */}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green/10 to-green/5 text-green flex items-center justify-center text-xl group-hover:from-green group-hover:to-green-dark group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <IconComponent />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-navy mb-3 leading-tight group-hover:text-green transition-colors">
                  {item.name}
                </h3>

                {/* Specs */}
                <p className="text-sm text-navy-lighter leading-relaxed mb-5 min-h-[3.5rem]">
                  {item.specs}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green"></div>
                    <span className="text-xs text-navy-lighter uppercase tracking-wider font-semibold">
                      {item.category || 'General'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-navy-lighter font-medium">Qty</span>
                    <span className="bg-gradient-to-br from-green/10 to-green/5 text-green font-bold text-sm px-3 py-1 rounded-full border border-green/20">
                      {item.qty}
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredEquipment.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-3xl text-navy-lighter">
              <FaSearch />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">No Equipment Found</h3>
            <p className="text-navy-lighter mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setActiveTab('all')
                setSearchQuery('')
              }}
              className="px-5 py-2 bg-green text-white rounded-lg font-semibold hover:bg-green-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Equipment