import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 z-0">
        <img
          src="/BannerVelas1.png"
          alt="Velas encendidas"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent-foreground font-medium">Serisana</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
          Serisana
        </h1>

        <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-8 text-balance">
          Encendé tu bienestar
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Cada vela es una invitación a pausar, respirar y conectar con tu esencia. Creadas con amor y dedicación para
          transformar tus espacios en refugios de calma.
        </p>

        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Descubre nuestras colecciones
        </Button>
      </div>
    </section>
  )
}
