import { CLOSING } from "@/lib/site-data"
import { Reveal } from "./motion"

export function ClosingCta() {
  return (
    <section className="section is-pine">
      <div className="container closing">
        <Reveal bare className="closing__rule" />
        <Reveal as="h2" delay={40}>
          {CLOSING.title}
        </Reveal>
        <Reveal as="p" delay={100}>
          {CLOSING.body}
        </Reveal>
        <Reveal delay={140}>
          <a className="btn btn--paper" href="#contact">
            {CLOSING.cta}
            <span className="arw" aria-hidden="true">&#8599;</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
