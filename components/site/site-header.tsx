"use client"

import { useEffect, useState } from "react"
import { NAV } from "@/lib/site-data"
import { useScrolled } from "./motion"

export function SiteHeader() {
  const scrolled = useScrolled(28)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <header className="masthead" data-scrolled={scrolled || open}>
        <div className="container masthead__row">
          <a className="brand" href="#home" aria-label="Rea's Cleaning Services — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand__mark"
              src="/my-logo.png"
              alt=""
              width={64}
              height={64}
            />
            <span className="brand__word">
              <b>Rea&rsquo;s</b>
              <span>Cleaning Services</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav__cta" href="#contact">
              Get a free quote <span className="arw" aria-hidden="true">&#8599;</span>
            </a>
          </nav>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu" data-open={open}>
        <nav aria-label="Mobile">
          {NAV.map((item, i) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{item.label}</span>
              <i>{String(i + 1).padStart(2, "0")}</i>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <span>Get a free quote</span>
            <i aria-hidden="true">&#8599;</i>
          </a>
        </nav>
        <div className="mobile-menu__foot">
          <a href="tel:404-934-2853">404-934-2853</a>
          <a href="mailto:emilie0874@gmail.com">emilie0874@gmail.com</a>
        </div>
      </div>
    </>
  )
}
