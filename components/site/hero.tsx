"use client"

import { HERO } from "@/lib/site-data"
import { Reveal, useParallax } from "./motion"

export function Hero() {
  const mediaRef = useParallax<HTMLDivElement>(0.12, 90)

  return (
    <section className="hero" id="home">
      <div className="hero__media" ref={mediaRef}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-cleaning.png"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <Reveal as="p" className="eyebrow hero__eyebrow" y={16}>
          {HERO.eyebrow}
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={80} y={30}>
          Professional cleaning services{" "}
          <span className="accent">you can count on.</span>
        </Reveal>

        <div className="hero__body">
          <Reveal as="p" delay={160} y={20}>
            {HERO.body}
          </Reveal>
          <Reveal className="hero__actions" delay={220} y={20}>
            <a className="btn btn--paper" href="#contact">
              Get a free quote
              <span className="arw" aria-hidden="true">&#8599;</span>
            </a>
            <a className="btn btn--ghost" href="tel:404-934-2853">
              Call 404-934-2853
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__stats" delay={260} y={16}>
          {HERO.stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <b aria-hidden="true">{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
