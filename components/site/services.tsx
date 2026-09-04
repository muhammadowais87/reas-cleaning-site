"use client"

import { SERVICES } from "@/lib/site-data"
import { Reveal } from "./motion"

export function Services() {
  return (
    <section className="section is-pine" id="services">
      <div className="container">
        <div className="services__head">
          <div>
            <Reveal as="p" className="eyebrow" x={-40}>
              What we do
            </Reveal>
            <Reveal as="h2" delay={80} x={-40} dur={1000}>
              Our cleaning services
            </Reveal>
          </div>
          <Reveal as="p" delay={140} x={40} dur={1000}>
            Flexible cleaning solutions for homes, businesses, rentals, and
            everything in between.
          </Reveal>
        </div>

        <div className="services__list">
          {SERVICES.map((service, i) => {
            const fromLeft = i % 2 === 0
            return (
              <Reveal
                as="article"
                id={service.slug}
                className="svc"
                key={service.title}
                x={fromLeft ? -64 : 64}
                dur={1100}
              >
                <span className="svc__num" aria-hidden="true">
                  {service.n}
                </span>
                <div className="svc__body">
                  <h3 className="svc__title">{service.title}</h3>
                  <p className="svc__copy">{service.copy}</p>
                </div>
                <div className="svc__media">
                  <div className="svc__frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={`${service.title} by Rea's Cleaning Services`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
