"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "María González",
    text: "Las velas de Masaje transformaron completamente mi rutina nocturna. Ahora tengo un ritual de relajación que espero cada noche.",
    rating: 5,
  },
  {
    name: "Lucía Fernández",
    text: "No solo son hermosas, el aroma perdura en mi casa por horas. La calidad es excepcional y se nota el amor con el que están hechas.",
    rating: 5,
  },
  {
    name: "Carolina Ruiz",
    text: "Compré varias para regalar y todas quedaron encantadas. Son el regalo perfecto para alguien que necesita un momento de paz.",
    rating: 5,
  },
  {
    name: "Sofía Martínez",
    text: "El Sueño Silvestre es mi favorita. Me transporta a un lugar de calma instantánea. Ya es parte esencial de mi espacio de meditación.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Experiencias que iluminan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Lo que dicen quienes ya encendieron su bienestar
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 text-pretty">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
