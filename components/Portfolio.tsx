"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "animation", label: "3D Animation" },
    { id: "design", label: "Design" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern e-commerce platform with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600",
      description: "Secure banking application for iOS and Android",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "3D Character Animation",
      category: "animation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Realistic character animation for gaming industry",
      technologies: ["Blender", "Unity", "C#", "Motion Capture"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "design",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand identity for tech startup",
      technologies: ["Adobe Creative Suite", "Figma", "Branding"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "VR Experience",
      category: "animation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Immersive VR experience for education",
      technologies: ["Unity", "Oculus SDK", "C#", "3D Modeling"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "SaaS Dashboard",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "Analytics dashboard for business intelligence",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading font-playfair">Our Portfolio</h2>
          <p className="section-subheading">Explore our latest projects and see how we bring ideas to life</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-card rounded-md overflow-hidden card-shadow subtle-hover">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-muted text-primary text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
