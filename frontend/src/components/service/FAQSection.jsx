import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/service.css";

function FAQSection() {
  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "Select your preferred service, choose a date and time, fill in your details, and click Confirm Booking.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel your booking before the scheduled service time from your dashboard.",
    },
    {
      question: "Are the professionals verified?",
      answer:
        "Yes. Every service provider is background verified and trained before joining SmartServe.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We support UPI, Debit Card, Credit Card, Net Banking and Cash after service.",
    },
    {
      question: "Is there any service warranty?",
      answer:
        "Yes. Most services include a warranty. The warranty period depends on the service category.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{faq.question}</span>

              {activeIndex === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}

            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQSection;