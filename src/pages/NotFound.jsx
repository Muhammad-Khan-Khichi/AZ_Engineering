import { Link } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy">
      <div className="text-center px-4">
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-green/20 flex items-center justify-center text-green text-4xl">
          <FaExclamationTriangle />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>

        <p className="text-white/60 text-lg md:text-xl mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound