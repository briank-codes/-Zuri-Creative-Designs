"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "./faqData";

function FaqItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-answer-${index}`;
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{item.question}</span>
        <span className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}>+</span>
      </button>
      <div id={panelId} className={`faq-answer-wrap ${isOpen ? "faq-answer-wrap-open" : ""}`}>
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={item.question}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
