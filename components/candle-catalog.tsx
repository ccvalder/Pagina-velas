import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const candles = [
  {
    name: "Vela Masaje - Sueño Silvestre",
    aroma: "Vayas de Azai",
    price: "$28.000",
    image: "/VelaMasajeVayas.png",
  },
  {
    name: "Vela Masaje - Herbolario ",
    aroma: "Calendula & Arnica",
    price: "$30.000",
    image: "/VelaMasajeCalendula.png",
  },
  {
    name: "Vela Masaje - Dulce Caricia",
    aroma: "Vainilla Francesa",
    price: "$28.000",
    image: "/VelaMasajeVainilla.png",
  },
  {
    name: "Vela Aromatica - Grande",
    aroma: "Rosa & Jazmín",
    price: "$32.000",
    image: "/VelaAroma-Grande.jpg",
  },
  {
    name: "Vela Aromatica - Mediana",
    aroma: "",
    price: "$22.000",
    image: "/VelaAroma-Mediana.jpg",
  },
  {
    name: "Vela Aromatica - Pequeña",
    aroma: "Menta & Romero",
    price: "$10.000",
    image: "/VelaAroma-Peque.jpg",
  },
  {
    name: "Velas Baby Sower",
    aroma: "Menta & Romero",
    price: " $8.000 / $3.500",
    image: "/VelaBabyShowerUnificada.png",
  },
]

export function CandleCatalog() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestra colección</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Cada vela cuenta una historia, cada aroma despierta una emoción
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {candles.map((candle, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden bg-secondary/20">
                <img
                  src={candle.image || "/placeholder.svg"}
                  alt={candle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">{candle.name}</h3>
                <p className="text-muted-foreground mb-4">{candle.aroma}</p>
                <p className="font-serif text-3xl font-bold text-primary">{candle.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a
                  href="https://wa.me/c/573505212525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-full bg-transparent" variant="outline">
                  Consultar disponibilidad
                </Button>
                </a>
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
