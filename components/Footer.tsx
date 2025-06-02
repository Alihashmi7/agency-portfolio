import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ]

  const footerLinks = {
    Services: ["Web Development", "Mobile Apps", "3D Animation", "Game Development", "Graphic Design"],
    Company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    Resources: ["Portfolio", "Case Studies", "Documentation", "Support", "Privacy Policy"],
  }

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 dark:from-foreground dark:to-background/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-playfair font-bold mb-4 block animated-gradient-text">
              IT Trend
            </Link>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              Crafting digital experiences through innovative technology and creative design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links with enhanced styling */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="hover-scale">
              <h3 className="text-lg font-semibold mb-4 gradient-text">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with gradient border */}
        <div className="border-t border-gradient-to-r from-primary/20 to-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground dark:text-gray-400 text-sm">
            © 2024 IT Trend Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
