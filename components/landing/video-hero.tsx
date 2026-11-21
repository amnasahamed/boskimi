"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./video-hero.css";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4";

const navItems = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const clients = [
  { src: "/home/assets/client-navakeralam.webp", alt: "Navakeralam" },
  { src: "/home/assets/client-badria.webp", alt: "Badria Sweets" },
  { src: "/home/assets/client-clapsboard.webp", alt: "Clapsboard" },
];

const stats = [
  { icon: "#", target: 118, suffix: "", decimals: 0, label: "Websites Delivered" },
  { icon: "+", target: 8, suffix: "", decimals: 0, label: "Countries Served" },
  { icon: "*", target: 28, suffix: "", decimals: 0, label: "Industries" },
  { icon: "<", target: 24, suffix: "/7", decimals: 0, label: "WhatsApp Automation" },
];

const MOBILE_MAX = 720;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const fmt = (v: number, d: number, s: string) => v.toFixed(d) + s;

export function VideoHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Mobile menu: Escape and resize close it
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > MOBILE_MAX) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Stat count-up, once, when visible
  useEffect(() => {
    const els = valueRefs.current.filter(Boolean) as HTMLSpanElement[];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const frames: number[] = [];

    const run = (el: HTMLSpanElement, i: number) => {
      const { target, decimals, suffix } = stats[i];
      if (reduce) {
        el.textContent = fmt(target, decimals, suffix);
        return;
      }
      const duration = 1500 + i * 80;
      timers.push(
        window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            el.textContent = fmt(target * easeOutCubic(t), decimals, suffix);
            if (t < 1) frames.push(requestAnimationFrame(tick));
          };
          frames.push(requestAnimationFrame(tick));
        }, 480 + i * 90)
      );
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLSpanElement;
          run(el, els.indexOf(el));
          obs.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      frames.forEach(cancelAnimationFrame);
    };
  }, []);

  return (
    <section className="vh-root" aria-label="Introduction">
      {/* React 19 hoists these into <head> */}
      <link
        rel="stylesheet"
        href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos"
        precedence="default"
      />
      <link rel="preload" href="/home/fonts/GeistPixel-Circle.woff2" as="font" type="font/woff2" crossOrigin="" />

      <div className="vh-bg" aria-hidden="true">
        <video className="vh-bg-video" autoPlay muted loop playsInline>
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div className="vh-page">
        <header className="vh-header">
          <a href="/" className="vh-logo" aria-label="Base of Stars home">
            <img src="/home/assets/logo.webp" alt="" width={52} height={52} />
          </a>

          <nav className="vh-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="vh-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/about#connect" className="vh-sign-in">
            Start a Project
          </a>

          <button
            ref={burgerRef}
            className="vh-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="vh-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <div className="vh-menu-overlay" hidden={!menuOpen} onClick={closeMenu} />
        <nav id="vh-mobile-menu" className="vh-mobile-menu" aria-label="Mobile" hidden={!menuOpen}>
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="vh-mobile-link"
              style={{ "--i": i } as React.CSSProperties}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/about#connect"
            className="vh-mobile-sign-in"
            style={{ "--i": navItems.length } as React.CSSProperties}
            onClick={closeMenu}
          >
            Start a Project
          </a>
        </nav>

        <div className="vh-hero">
          <div className="vh-trust vh-anim" style={{ "--d": "0.05s" } as React.CSSProperties}>
            {clients.map((c, i) => (
              <span key={c.alt} className={`vh-trust-avatar vh-a${i + 1}`}>
                <img src={c.src} alt={c.alt} width={64} height={64} />
              </span>
            ))}
            <span className="vh-trust-pill">Trusted by 100+ businesses</span>
          </div>

          <h1 className="vh-headline vh-anim">
            <span className="vh-line vh-l1">Tired of Doing Work</span>
            <span className="vh-line vh-l2">Software Should Do?</span>
          </h1>

          <p className="vh-subhead vh-anim" style={{ "--d": "0.28s" } as React.CSSProperties}>
            <span className="vh-sub-short">
              We build smart systems that handle repetitive work, so you can focus on what matters.
            </span>
            <span className="vh-sub-long">
              We&rsquo;re a small team of engineers who build smart systems that handle the repetitive
              stuff, so you and your team can focus on the work that actually matters.
            </span>
          </p>

          <a href="/about#connect" className="vh-cta vh-anim" style={{ "--d": "0.4s" } as React.CSSProperties}>
            Book a Free Call
          </a>
        </div>

        <div className="vh-stats" aria-label="Our track record">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="vh-stat vh-anim"
              style={{ "--d": `${0.5 + i * 0.08}s` } as React.CSSProperties}
            >
              <span className="vh-stat-icon" aria-hidden="true">
                {s.icon}
              </span>
              <span
                className="vh-stat-value"
                ref={(el) => {
                  valueRefs.current[i] = el;
                }}
              >
                {fmt(0, s.decimals, s.suffix)}
              </span>
              <span className="vh-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="vh-fade" aria-hidden="true" />
    </section>
  );
}
