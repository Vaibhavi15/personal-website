import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-8 border-black py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 bg-yellow-500 border-4 border-white rotate-12"></div>
              <div className="h-10 w-10 bg-blue-600 border-4 border-white -ml-4 -rotate-12"></div>
              <span className="font-black text-2xl tracking-tighter ml-2">VAIBHAVI PAI</span>
            </div>
            <p className="font-mono max-w-md">
              Technologist, mentor, and explorer navigating the intersection of AI, creativity, and human connection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4 uppercase border-b-2 border-white pb-2 inline-block">NAVIGATE</h3>
              <ul className="space-y-2 font-mono">
                <li>
                  <Link href="/work" className="hover:text-yellow-500 transition-colors">
                    WORK
                  </Link>
                </li>
                <li>
                  <Link href="/play" className="hover:text-yellow-500 transition-colors">
                    PLAY
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-yellow-500 transition-colors">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-500 transition-colors">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black mb-4 uppercase border-b-2 border-white pb-2 inline-block">CONNECT</h3>
              <ul className="space-y-2 font-mono">
                <li>
                  <a
                    href="https://x.com/VaibhaviPai15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    TWITTER
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vaibhavi-pai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Vaibhavi15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    GITHUB
                  </a>
                </li>
                <li>
                  <a href="mailto:paivaibhavi15@gmail.com" className="hover:text-yellow-500 transition-colors">
                    EMAIL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 font-mono text-sm">
          <p>© {new Date().getFullYear()} Vaibhavi Pai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
