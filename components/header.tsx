"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false)
  const [playDropdownOpen, setPlayDropdownOpen] = useState(false)

  const workDropdownRef = useRef<HTMLDivElement>(null)
  const playDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close work dropdown if click is outside
      if (workDropdownRef.current && !workDropdownRef.current.contains(event.target as Node) && workDropdownOpen) {
        setWorkDropdownOpen(false)
      }

      // Close play dropdown if click is outside
      if (playDropdownRef.current && !playDropdownRef.current.contains(event.target as Node) && playDropdownOpen) {
        setPlayDropdownOpen(false)
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside)

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [workDropdownOpen, playDropdownOpen])

  return (
    <header className="sticky top-0 z-40 w-full border-b-8 border-black bg-primary">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12"></div>
            <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12"></div>
            <span className="font-black text-xl sm:text-2xl tracking-tighter ml-4 text-white">VAIBHAVI PAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Work Dropdown */}
          <div className="relative" ref={workDropdownRef}>
            <button
              onClick={() => {
                setWorkDropdownOpen(!workDropdownOpen)
                setPlayDropdownOpen(false)
              }}
              className="flex items-center gap-1 text-white font-bold text-lg hover:text-yellow-500 transition-colors"
            >
              WORK <ChevronDown className="h-4 w-4" />
            </button>
            {workDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border-4 border-black shadow-brutal min-w-[160px] z-50">
                <Link href="/work/ai" className="block w-full px-4 py-2 font-bold hover:bg-yellow-500 cursor-pointer">
                  AI
                </Link>
                <Link
                  href="/work/projects"
                  className="block w-full px-4 py-2 font-bold hover:bg-yellow-500 cursor-pointer"
                >
                  PROJECTS
                </Link>
                <Link
                  href="/work/mentorship"
                  className="block w-full px-4 py-2 font-bold hover:bg-yellow-500 cursor-pointer"
                >
                  MENTORSHIP
                </Link>
              </div>
            )}
          </div>

          {/* Play Dropdown */}
          <div className="relative" ref={playDropdownRef}>
            <button
              onClick={() => {
                setPlayDropdownOpen(!playDropdownOpen)
                setWorkDropdownOpen(false)
              }}
              className="flex items-center gap-1 text-white font-bold text-lg hover:text-yellow-500 transition-colors"
            >
              PLAY <ChevronDown className="h-4 w-4" />
            </button>
            {playDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border-4 border-black shadow-brutal min-w-[160px] z-50">
                <Link
                  href="/play/ahaa-ahaara"
                  className="block w-full px-4 py-2 font-bold hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  AHAA!AHAARA
                </Link>
                <Link
                  href="/play/travel"
                  className="block w-full px-4 py-2 font-bold hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  TRAVEL
                </Link>
                <Link
                  href="/play/boardgames"
                  className="block w-full px-4 py-2 font-bold hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  BOARDGAMES
                </Link>
                <Link
                  href="/blog"
                  className="block w-full px-4 py-2 font-bold hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  BLOG
                </Link>
              </div>
            )}
          </div>

          <Link href="/play/open" className="text-white font-bold text-lg hover:text-yellow-500 transition-colors">
            OPEN
          </Link>

          <Link href="/contact" className="text-white font-bold text-lg hover:text-yellow-500 transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t-4 border-white">
          <div className="container py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-white font-bold text-lg border-b border-white pb-1">WORK</div>
              <div className="pl-4 space-y-2">
                <Link href="/work/ai" className="block text-white hover:text-yellow-500">
                  AI
                </Link>
                <Link href="/work/projects" className="block text-white hover:text-yellow-500">
                  PROJECTS
                </Link>
                <Link href="/work/mentorship" className="block text-white hover:text-yellow-500">
                  MENTORSHIP
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold text-lg border-b border-white pb-1">PLAY</div>
              <div className="pl-4 space-y-2">
                <Link href="/play/ahaa-ahaara" className="block text-white hover:text-yellow-500">
                  AHAA!AHAARA
                </Link>
                <Link href="/play/travel" className="block text-white hover:text-yellow-500">
                  TRAVEL
                </Link>
                <Link href="/play/boardgames" className="block text-white hover:text-yellow-500">
                  BOARDGAMES
                </Link>
                <Link href="/blog" className="block text-white hover:text-yellow-500">
                  BLOG
                </Link>
              </div>
            </div>

            <Link href="/play/open" className="block text-white font-bold text-lg hover:text-yellow-500">
              OPEN
            </Link>

            <Link href="/contact" className="block text-white font-bold text-lg hover:text-yellow-500">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
