import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Gallery } from "@/components/site/gallery"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { ClosingCta } from "@/components/site/closing-cta"
import { SiteFooter } from "@/components/site/site-footer"
import { WhatsAppButton } from "@/components/site/whatsapp-button"

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Faq />
        <Contact />
        <ClosingCta />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
