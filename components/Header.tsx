"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-sm border-b border-border/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-2xl font-playfair font-bold animated-gradient-text hover-scale">
            IT Trend
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/60 transition-all duration-300 hover-scale"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="relative ml-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium text-sm 
              shadow-md hover:shadow-lg transition-all duration-300 
              hover:-translate-y-0.5 hover:scale-105 active:scale-95"
            >
              Get Quote
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full card-glass shadow-lg md:hidden animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-md text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="relative px-4 py-3 rounded-md bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium
              hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 text-center
              hover:scale-[1.02] active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
