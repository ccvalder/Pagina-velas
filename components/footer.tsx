import { Instagram, Facebook, Mail, MapPin } from "lucide-react"

import { FC } from "react"

const TikTok: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)


export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Serisana</h3>
            <p className="text-background/80 leading-relaxed mb-6">
              Creando momentos de paz y conexión, una vela a la vez.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSD2DK9Ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTok className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Ubicación</h4>
            <div className="flex gap-3 text-background/80 mb-4">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="leading-relaxed">
                Bogotá, Colombia
                <br />
                Envíos a todo el país
              </p>
            </div>
            <div className="flex gap-3 text-background/80">
              <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>serisana@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2025 Velas con Intención. Todos los derechos reservados.</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="#" className="hover:text-background transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
