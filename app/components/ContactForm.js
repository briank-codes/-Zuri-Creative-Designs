"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
         access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact Form Submission from ${form.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a bit about your project..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary contact-form-submit"
        disabled={status === "sending"}
      >
        {status === "sent" ? (
          <>
            Message Sent <CheckCircle2 size={16} />
          </>
        ) : status === "sending" ? (
          <>Sending...</>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="contact-form-note contact-form-note-success">
            Thanks for reaching out — we&apos;ll get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="contact-form-note contact-form-note-error">
            <AlertCircle size={14} /> Something went wrong. Please try again, or
            WhatsApp us directly.
          </p>
        )}
      </div>

      <style jsx>{`
        .contact-form {
          max-width: 640px;
          margin: 2.5rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .contact-form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .contact-form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(0, 0, 0, 0.65);
        }

        .contact-form-field input,
        .contact-form-field textarea {
          font: inherit;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 1.5px solid rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.02);
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-form-field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .contact-form-field input:focus,
        .contact-form-field textarea:focus {
          border-color: currentColor;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
        }

        .contact-form-submit {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
        }

        .contact-form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form-note {
          font-size: 0.9rem;
          margin: -0.5rem 0 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .contact-form-note-success {
          color: #1a7a3c;
        }

        .contact-form-note-error {
          color: #c23434;
        }

        @media (max-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-submit {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </form>
  );
}