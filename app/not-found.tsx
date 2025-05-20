import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 mb-6">Page Not Found</h2>
        <p className="text-zinc-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/home" 
          className="inline-flex items-center justify-center px-6 py-3 border border-zinc-900 text-base font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 