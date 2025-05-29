import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full animate-fade-in-up animation-delay-700">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-8">
        <div className="flex flex-col items-center space-y-3 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with care by{" "}
            <Link
              href="https://x.com/rafiwiranaa"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 font-medium transition-colors focus-ring rounded"
              aria-label="Visit Rafi's Twitter"
            >
              Rafi
            </Link>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Keepr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 