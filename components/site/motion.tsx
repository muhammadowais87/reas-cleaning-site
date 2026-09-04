"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

type RevealProps = {
  as?: ElementType
  children?: ReactNode
  className?: string
  /** stagger delay in ms */
  delay?: number
  /** vertical travel distance in px (default 26) */
  y?: number
  /** horizontal travel distance in px (negative = from the left) */
  x?: number
  /** transition duration in ms (default 900) */
  dur?: number
  /**
   * When true, only toggles `data-shown` and skips the built-in
   * fade/translate — the consumer styles the reveal itself.
   */
  bare?: boolean
  style?: CSSProperties
  id?: string
  /** passthrough attributes (aria-*, role, etc.) */
  [key: `aria-${string}`]: unknown
  role?: string
}

/**
 * Fades + eases its children into view once, using IntersectionObserver.
 * Honours prefers-reduced-motion (renders immediately, no transform).
 */
export function Reveal({
  as,
  children,
  className,
  delay = 0,
  y,
  x,
  dur,
  bare = false,
  style,
  id,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const vars: Record<string, string> = { "--rd": `${delay}ms` }
  if (x != null) {
    vars["--rx"] = `${x}px`
    vars["--ry"] = `${y ?? 0}px`
  } else if (y != null) {
    vars["--ry"] = `${y}px`
  }
  if (dur != null) vars["--rdur"] = `${dur}ms`

  return (
    <Tag
      ref={ref as never}
      id={id}
      {...(bare ? {} : { "data-reveal": "" })}
      data-shown={shown}
      className={className}
      style={{ ...vars, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Returns a ref to attach to an element that should drift on scroll.
 * The element receives a `--py` custom property (px) — use it in a
 * `transform: translate3d(0, var(--py, 0), 0)` rule in CSS.
 *
 * Position is derived from `offsetTop` (layout, unaffected by our own
 * transform) and clamped, so there is no measurement feedback loop.
 */
export function useParallax<T extends HTMLElement>(strength = 0.1, max = 130) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let raf = 0
    let anchor = 0

    const measure = () => {
      let top = 0
      let node: HTMLElement | null = el
      while (node) {
        top += node.offsetTop
        node = node.offsetParent as HTMLElement | null
      }
      anchor = top + el.offsetHeight / 2
    }

    const update = () => {
      raf = 0
      const vh = window.innerHeight || 1
      const viewportCenter = window.scrollY + vh / 2
      let py = (viewportCenter - anchor) * strength
      if (!Number.isFinite(py)) return
      py = Math.max(-max, Math.min(max, py))
      el.style.setProperty("--py", `${py.toFixed(1)}px`)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onResize = () => {
      measure()
      update()
    }

    measure()
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(raf)
    }
  }, [strength, max])

  return ref
}

/** Tracks whether the page has been scrolled past `offset` px. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [offset])
  return scrolled
}
