"use client"

import { useState } from "react"
import { FAQ } from "@/lib/site-data"
import { Reveal } from "./motion"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section is-ink" id="faq">
      <div className="container faq__grid">
        <div className="faq__aside">
          <Reveal as="p" className="eyebrow">
            {FAQ.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={60}>
            {FAQ.titleLead} <em>{FAQ.titleEm}</em>
          </Reveal>
          <Reveal as="p" delay={120}>
            {FAQ.intro}
          </Reveal>
          <Reveal delay={160}>
            <a className="link-arrow" href="tel:404-934-2853">
              {FAQ.cta}
              <span className="arw" aria-hidden="true">&#8599;</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="faq__list" y={30}>
          {FAQ.items.map((item, i) => {
            const open = openIndex === i
            return (
              <div className="faq__item" key={item.q} data-open={open}>
                <h3>
                  <button
                    className="faq__q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span className="faq__q-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="faq__q-text">{item.q}</span>
                    <span className="faq__q-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  <div className="faq__a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
