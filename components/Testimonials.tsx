"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "IT Trend Agency transformed our vision into reality. Their 3D animations and web development skills are unmatched.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      position: "Creative Director, Design Studio",
      content:
        "Working with IT Trend was a game-changer. They delivered beyond our expectations with incredible attention to detail.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, GameDev Studios",
      content:
        "The team's expertise in game development and 3D animation helped us create an award-winning mobile game.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading font-playfair">What Clients Say</h2>
          <p className="section-subheading">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-muted p-8 md:p-12 rounded-md card-shadow relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <div>
                  <div className="text-lg font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                  <div className="text-primary">{testimonials[currentTestimonial].position}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary" : "bg-muted-foreground hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
