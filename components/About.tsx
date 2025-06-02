"use client"

import { useEffect, useRef } from "react"
import { Code, Palette, Gamepad2, Zap } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ]

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "3D Animation",
      description: "Stunning 3D animations and visual effects for any platform",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Game Development",
      description: "Immersive gaming experiences across mobile and web platforms",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Design",
      description: "Brand identity and graphic design that makes an impact",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 relative bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading font-playfair">About Us</h2>
          <p className="section-subheading">
            We are a creative digital agency specializing in cutting-edge technology solutions. Our team combines
            artistic vision with technical expertise to deliver exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card p-6 rounded-md card-shadow">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-md card-shadow subtle-hover">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
