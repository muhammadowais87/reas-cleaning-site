"use client"

import { ABOUT } from "@/lib/site-data"
import { Reveal, useParallax } from "./motion"

export function About() {
  const imgRef = useParallax<HTMLImageElement>(0.06, 42)

  return (
    <section className="section is-paper" id="about">
      <div className="container about__grid">
        <Reveal className="about__media" y={40}>
          <div className="about__frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src="/about-image.jpg"
              alt="Rea's Cleaning Services team cleaning office windows"
              width={1067}
              height={1600}
              loading="lazy"
            />
          </div>
          <div className="about__badge">
            <b>{ABOUT.badge.value}</b>
            <span>{ABOUT.badge.label}</span>
          </div>
        </Reveal>

        <div className="about__copy">
          <Reveal as="p" className="eyebrow">
            {ABOUT.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={60}>
            {ABOUT.titleLead} <em>{ABOUT.titleEm}</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            {ABOUT.body}
          </Reveal>

          <Reveal as="ul" className="about__points" delay={160}>
            {ABOUT.points.map((point, i) => (
              <li key={point}>
                <i>{String(i + 1).padStart(2, "0")}</i>
                {point}
              </li>
            ))}
          </Reveal>

          <Reveal as="p" className="about__founder" delay={200}>
            &mdash; {ABOUT.founder}, <span>{ABOUT.founderTitle}</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
