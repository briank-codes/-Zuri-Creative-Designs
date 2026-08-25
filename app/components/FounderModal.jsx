'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brianPhoto from '../../public/about/brian.jpg';

export default function FounderModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // Move focus into the modal, and remember what to return focus to on close.
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }

      // Basic focus trap: keep Tab from leaving the modal.
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const trigger = triggerRef.current;
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        className="btn-primary about2-cta"
        onClick={() => setOpen(true)}
      >
        Meet the Founder <span>→</span>
      </button>

      {open && (
        <div className="founder-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="founder-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="founder-modal-name"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              className="founder-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="founder-modal-photo-wrap">
              <Image
                src={brianPhoto}
                alt="Brian Korir"
                className="founder-modal-photo"
                width={120}
                height={120}
              />
              <span className="about2-location-chip">📍 Nyahururu, Kenya</span>
            </div>

            <h2 id="founder-modal-name" className="founder-modal-name">Brian Korir</h2>
            <p className="founder-modal-title">Founder &amp; Lead Developer, Zuri Creative Designs</p>

            <p className="about2-text">
              I&apos;m a self-taught web developer based in Nyahururu, Kenya. I&apos;ve built everything
              from real estate marketplaces with M-Pesa integration to restaurant sites with
              online ordering — learning by shipping things that had to work, not just look good.
            </p>

            <p className="about2-text">
              Whether you&apos;re a real estate agent, a restaurant owner, or a business beyond Kenya,
              my goal stays the same: build something fast, clean, and built around how your
              customers actually behave — whether that&apos;s WhatsApp, M-Pesa, or a simple contact form.
            </p>

            <Link href="/#contact" className="btn-primary about2-cta" onClick={() => setOpen(false)}>
              Let&apos;s talk about your project <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
