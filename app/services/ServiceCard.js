"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ServiceCard({ title, image, intro, highlight, what, howClients, howFollowUp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="service-card">
      <div className="service-card-media">
        <Image
          src={image}
          alt={title}
          width={720}
          height={520}
          className="service-card-image"
          sizes="(max-width: 900px) 100vw, 420px"
        />
      </div>

      <div className="service-card-copy">
        <p className="service-card-eyebrow">{title}</p>
        <h2>{title}</h2>
        <p className="service-card-intro">{intro}</p>
        <p className="service-card-highlight">{highlight}</p>

        <button
          type="button"
          className="cta-button service-card-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          {open ? 'Hide details' : 'Discover more'}
        </button>

        {open && (
          <div className="service-card-details">
            <div className="service-card-section">
              <p className="service-card-section-title">What I Do:</p>
              <p>{what}</p>
            </div>

            <div className="service-card-section">
              <p className="service-card-section-title">How it gets you clients:</p>
              <ul className="service-card-section-list">
                {howClients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-card-section">
              <p className="service-card-section-title">How we follow up and keep them:</p>
              <ul className="service-card-section-list">
                {howFollowUp.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
