import React, { useState } from "react";
import styles from "../../styles/home.module.css";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [click, setClick] = useState(false);


  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 12:00 PM, and check-out time is 11:00 AM.",
    },
    {
      question: "Do you offer free parking?",
      answer: "Yes, we provide free and secure parking for all our guests.",
    },
    {
      question: "Is breakfast included in the room rate?",
      answer: "Yes, complimentary breakfast is included with every booking.",
    },
    {
      question: "Do you allow pets?",
      answer:
        "Sorry, pets are not allowed in our premises for hygiene reasons.",
    },
    {
      question: "How can I modify or cancel my booking?",
      answer:
        "You can contact us directly or use the online booking portal to modify/cancel your reservation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqSectionContainer}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div className={styles.questionDropdown}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}

                  <span>
                    {activeIndex==index? <IoChevronUpSharp onClick={()=>setClick(!click)}/>: <IoChevronDown onClick={()=>setClick(!click)}/>}
                  </span>
                </button>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
