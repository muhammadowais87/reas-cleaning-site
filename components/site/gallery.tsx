"use client"

import { useCallback, useEffect, useState } from "react"
import { GALLERY } from "@/lib/site-data"
import { Reveal } from "./motion"

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const showPrev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + GALLERY.items.length) % GALLERY.items.length,
      ),
    [],
  )
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % GALLERY.items.length)),
    [],
  )

  useEffect(() => {
    if (openIndex === null) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [openIndex, close, showPrev, showNext])

  const active = openIndex === null ? null : GALLERY.items[openIndex]

  return (
    <section className="section is-paper" id="gallery">
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
                <button
                  type="button"
                  className="g-fig__btn"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`View larger photo: ${item.caption}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={`${item.caption} by Rea's Cleaning Services`}
                    loading="lazy"
                  />
                </button>
                <figcaption className="g-cap">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Close"
          >
            &#10005;
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous photo"
          >
            &#8592;
          </button>
          <figure
            className="lightbox__fig"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={`${active.caption} by Rea's Cleaning Services`}
            />
            <figcaption>{active.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next photo"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  )
}
