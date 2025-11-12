import { Home, Heart, Sparkles } from "lucide-react"

const recommendations = [
  {
    icon: Home,
    title: "Ambientar",
    description: "Transformá cualquier espacio en un refugio acogedor. Recorta el pabilo antes de cada uso para una combustión limpia",
  },
  {
    icon: Heart,
    title: "Relajar",
    description: "Creá momentos de paz y desconexión del mundo. Enciende la vela deja derrretir la base, apagala y disfrutá del masaje",
  },
  {
    icon: Sparkles,
    title: "Decorar",
    description: "Añade calidez y estilo a cada rincón de tu hogar. Nuestras velas son el complemento perfecto para cualquier decoración.",
  },
]

export function UsageRecommendations() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          ¿Cómo usar tus velas?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {recommendations.map((item, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6 group-hover:bg-accent/30 transition-colors">
                <item.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
