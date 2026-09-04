"use client"

import { GALLERY } from "@/lib/site-data"
import { Reveal } from "./motion"

export function Gallery() {
  return (
    <section className="section is-sand" id="gallery">
      <div className="container">
        <div className="gallery__head">
          <div>
            <Reveal as="p" className="eyebrow">
              {GALLERY.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={60}>
              {GALLERY.title}
            </Reveal>
          </div>
          <Reveal as="p" delay={120}>
            {GALLERY.tagline}
          </Reveal>
        </div>

        <div className="gallery__grid">
          {GALLERY.items.map((item, i) => (
            <Reveal
              className="g-item"
              key={item.src}
              delay={(i % 3) * 90}
              y={0}
              dur={700}
            >
              <figure
                className="g-fig"
                style={{ "--ar": item.ar } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={`${item.caption} by Rea's Cleaning Services`}
                  loading="lazy"
                />
                <figcaption className="g-cap">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
