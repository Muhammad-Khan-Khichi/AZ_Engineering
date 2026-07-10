import { equipment } from '../../data/equipment'
import SectionHeader from '../ui/SectionHeader'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Equipment = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="equipment" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Resources"
          title="Equipment & Tools"
          subtitle="A comprehensive inventory of professional equipment and tools that enable us to deliver quality engineering solutions."
        />

        <div
          ref={ref}
          className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-navy text-white text-sm font-semibold">
            <div className="col-span-1 px-4 py-4 text-center">#</div>
            <div className="col-span-6 md:col-span-5 px-4 py-4">Equipment Name</div>
            <div className="col-span-4 md:col-span-4 px-4 py-4">Specifications</div>
            <div className="col-span-1 md:col-span-2 px-4 py-4 text-center">Qty</div>
          </div>

          {/* Table Rows */}
          {equipment.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-12 items-center text-sm border-b border-gray-50 hover:bg-green/5 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <div className="col-span-1 px-4 py-4 text-center text-navy-lighter font-medium">
                {String(item.id).padStart(2, '0')}
              </div>
              <div className="col-span-6 md:col-span-5 px-4 py-4 text-navy font-medium">
                {item.name}
              </div>
              <div className="col-span-4 md:col-span-4 px-4 py-4 text-navy-lighter">
                {item.specs}
              </div>
              <div className="col-span-1 md:col-span-2 px-4 py-4 text-center text-green font-bold">
                {item.qty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment