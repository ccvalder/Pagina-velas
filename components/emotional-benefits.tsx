import { Card, CardContent } from "@/components/ui/card"
import { Flower2, Users, Wind } from "lucide-react"

const benefits = [
  {
    icon: Wind,
    title: "Aromaterapia",
    description: "Fragancias naturales que equilibran tu mente y elevan tu espíritu",
    image: "/essential-oils-and-natural-aromatherapy-candles.jpg",
  },
  {
    icon: Users,
    title: "Conexión",
    description: "Creá rituales significativos que te conecten con vos mismo y tus seres queridos",
    image: "/people-connecting-in-warm-candlelight-atmosphere.jpg",
  },
  {
    icon: Flower2,
    title: "Calma",
    description: "Encontrá tu centro en medio del caos diario con momentos de serenidad",
    image: "/peaceful-meditation-space-with-candles.jpg",
  },
]

export function EmotionalBenefits() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Beneficios para tu bienestar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Más que velas, son herramientas para cultivar tu paz interior
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/90 mb-3">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
