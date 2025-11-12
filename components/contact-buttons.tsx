import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function ContactButtons() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            ¿Lista para encender tu bienestar?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
            Contactanos para conocer más sobre nuestras velas, hacer tu pedido personalizado o simplemente compartir tu
            experiencia con nosotros
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.instagram.com/serisana_velas_co?igsh=MWxnYjYwdWZ6cGJpeA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-3 min-w-[240px]"
              >
                <Instagram className="w-6 h-6" />
                ¡Seguinos en Instagram!
              </Button>
            </a>

            <a
              href="https://wa.me/c/573505212525"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-3 min-w-[240px] bg-background"
              >
                <MessageCircle className="w-6 h-6" />
                ¡Escríbenos por WhatsApp!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
