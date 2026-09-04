import { CONTACT, FOOTER } from "@/lib/site-data"
import { Reveal } from "./motion"

export function SiteFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <Reveal className="footer__brand" y={24}>
            <span className="footer__seal">
              <span className="disc">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/my-logo.png" alt="" width={46} height={46} />
              </span>
              <b>{FOOTER.name}</b>
            </span>
            <p>{FOOTER.tagline}</p>
            <div className="footer__socials">
              <a
                className="footer__social"
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">f</span>
                Facebook
              </a>
              <a
                className="footer__social"
                href={CONTACT.gmb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">G</span>
                Google
              </a>
            </div>
          </Reveal>

          {FOOTER.columns.map((col, i) => (
            <Reveal
              className="footer__col"
              key={col.title}
              y={22}
              delay={120 + i * 90}
            >
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="footer__col footer__reach" y={22} delay={300}>
            <h3>Get in touch</h3>
            <ul>
              {FOOTER.reach.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.href ? (
                    item.href.startsWith("http") ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <a href={item.href}>{item.value}</a>
                    )
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="footer__wordmark" y={30} dur={1200} aria-hidden="true">
          {FOOTER.name}
        </Reveal>

        <div className="footer__bottom">
          <div className="footer__bottom-note">
            <span>{FOOTER.copyright}</span>
            <span>{FOOTER.copyrightNote}</span>
            <span>
              Powered by{" "}
              <a
                className="footer__credit"
                href="https://www.rizingmetrics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rizing Metrics
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
