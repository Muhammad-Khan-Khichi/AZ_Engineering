const stats = [
  { num: '50+', label: 'Projects Completed' },
  { num: '30+', label: 'Happy Clients' },
  { num: '15+', label: 'Industries Served' },
  { num: '5+', label: 'Years Experience' },
]

const StatsBar = () => {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green mb-2">
                {stat.num}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar