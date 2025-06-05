import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full animate-fade-in-up animation-delay-700">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-8">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex flex-row items-center space-x-1">
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              Built by{" "}
              <Link
                href="https://x.com/rafiwiranaa"
                className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 font-medium transition-colors focus-ring rounded hover:underline"
                aria-label="Visit Rafi's Twitter"
              >
                Rafi.
              </Link>
            </p>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              The source code is available on{" "}
              <Link
                href="https://github.com/ahmadrafidev/Keepr"
                className="text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300 font-medium transition-colors focus-ring rounded hover:underline"
                aria-label="Visit Keepr's GitHub"
              >
                GitHub.
              </Link>
            </p>
          </div>   
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
            © {new Date().getFullYear()} Keepr. 
          </p>
        </div>
      </div>
    </footer>
  )
} 