"use client"

import { useState } from "react"
import { Monitor, Smartphone, Globe, Brush } from "lucide-react"

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks",
      features: ["React/Next.js", "Node.js Backend", "Database Integration", "API Development"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "3D & Animation",
      description: "Stunning 3D models, animations, and interactive experiences",
      features: ["3D Modeling", "Character Animation", "VR/AR Experiences", "Motion Graphics"],
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Design Services",
      description: "Creative design solutions for digital and print media",
      features: ["UI/UX Design", "Brand Identity", "Logo Design", "Marketing Materials"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading font-playfair">Our Services</h2>
          <p className="section-subheading">We offer comprehensive digital solutions to bring your ideas to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-md cursor-pointer transition-all duration-300 ${
                  activeService === index ? "bg-primary text-white shadow-lg" : "bg-muted hover:bg-primary/10"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={activeService === index ? "text-white" : "text-primary"}>{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className={`text-sm ${activeService === index ? "text-white/80" : "text-muted-foreground"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-muted p-8 rounded-md card-shadow">
            <div className="text-primary mb-6">{services[activeService].icon}</div>
            <h3 className="text-3xl font-playfair font-bold mb-4 text-foreground">{services[activeService].title}</h3>
            <p className="text-muted-foreground mb-6 text-lg">{services[activeService].description}</p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">What we offer:</h4>
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
