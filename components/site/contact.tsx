"use client"

import { useState, type FormEvent } from "react"
import { CONTACT, CONTACT_SECTION, SERVICE_OPTIONS } from "@/lib/site-data"
import { Reveal } from "./motion"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? "").trim()

    const lines = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Service needed: ${get("service")}`,
      `Preferred date: ${get("date")}`,
      "",
      get("message"),
    ]
    const subject = encodeURIComponent(
      `Quote request — ${get("service") || "Cleaning"}`,
    )
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href = `${CONTACT.emailHref}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section is-paper" id="contact">
      <div className="container">
        <div className="contact__head">
          <Reveal as="p" className="eyebrow">
            {CONTACT_SECTION.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={60}>
            {CONTACT_SECTION.titleLead} <em>{CONTACT_SECTION.titleEm}</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            {CONTACT_SECTION.intro}
          </Reveal>
        </div>

        <Reveal className="contact__panel" y={40}>
          <div className="contact__aside">
            {CONTACT_SECTION.options.map((opt) => (
              <div className="contact__opt" key={opt.label}>
                <span>{opt.label}</span>
                {opt.href ? (
                  <b>
                    <a href={opt.href}>{opt.value}</a>
                  </b>
                ) : (
                  <b>{opt.value}</b>
                )}
              </div>
            ))}
          </div>

          <div className="contact__form">
            <div className="contact__form-head">
              <b>{CONTACT_SECTION.form.title}</b>
              <p>{CONTACT_SECTION.form.subtitle}</p>
            </div>

            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <input id="c-name" name="name" type="text" required placeholder="Your full name" />
                <label htmlFor="c-name">Full name</label>
              </div>
              <div className="field">
                <input id="c-phone" name="phone" type="tel" placeholder="404-000-0000" />
                <label htmlFor="c-phone">Phone number</label>
              </div>
              <div className="field">
                <input id="c-email" name="email" type="email" required placeholder="you@email.com" />
                <label htmlFor="c-email">Email</label>
              </div>
              <div className="field">
                <input id="c-date" name="date" type="date" />
                <label htmlFor="c-date">Preferred date</label>
              </div>
              <div className="field field--full">
                <select id="c-service" name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <label htmlFor="c-service">Service needed</label>
              </div>
              <div className="field field--full">
                <textarea id="c-message" name="message" rows={3} placeholder="Tell us about your space…" />
                <label htmlFor="c-message">Message</label>
              </div>

              <div className="contact__submit field--full">
                <button className="btn btn--paper" type="submit">
                  {CONTACT_SECTION.form.cta}
                  <span className="arw" aria-hidden="true">&#8599;</span>
                </button>
                <p>{CONTACT_SECTION.form.disclaimer}</p>
              </div>
            </form>

            {sent && (
              <p className="contact__sent" role="status">
                <span aria-hidden="true">&#10003;</span>
                Opening your email app — send the message and we&rsquo;ll reply shortly.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
