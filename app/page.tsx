import { Hero } from "@/components/hero"
import { UsageRecommendations } from "@/components/usage-recommendations"
import { EmotionalBenefits } from "@/components/emotional-benefits"
import { CandleCatalog } from "@/components/candle-catalog"
import { ContactButtons } from "@/components/contact-buttons"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <UsageRecommendations />
      <EmotionalBenefits />
      <CandleCatalog />
      <ContactButtons />
      <Testimonials />
      <Footer />
    </main>
  )
}
