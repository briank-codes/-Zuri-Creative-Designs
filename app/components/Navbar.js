"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo-horizontal.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goToContact = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <div className="top-bar-sticky">
      <Link href="/" className="top-bar-logo-link">
        <Image
          src={logo}
          alt="Zuri Creative Designs"
          className="top-bar-logo-img"
          priority
        />
      </Link>

      <nav
        id="nav-links"
        className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`nav-link${pathname === "/" ? " active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/work"
          onClick={() => setMenuOpen(false)}
          className={`nav-link${pathname === "/work" ? " active" : ""}`}
        >
          Our Work
        </Link>
        <Link
          href="/services"
          onClick={() => setMenuOpen(false)}
          className={`nav-link${pathname === "/services" ? " active" : ""}`}
        >
          Services
        </Link>
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className={`nav-link${pathname === "/about" ? " active" : ""}`}
        >
          About
        </Link>
        <Link href="/#contact" onClick={goToContact} className="contact-us-btn">Get a Free Quote</Link>
      </nav>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </div>
  );
}
