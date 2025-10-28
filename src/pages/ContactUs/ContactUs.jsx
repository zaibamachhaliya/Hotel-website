// import React, { useRef } from "react";
// import styles from "../../styles/ConnectUs.module.css";
// import { PiPhoneCallFill } from "react-icons/pi";
// import { MdEmail } from "react-icons/md";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

// function ContactUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_w8i6mgi",
//         "template_f1vlzka",
//         form.current,
//         "4iHIJ5FRNfaxmsG5c"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully!", result.text);
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("Failed to send email.", error.text);
//           alert("Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <main>
//       <div className={styles.mainContaier}>
//         <div className={styles.coonetUsimg}>
//           <img src="assets/ConnectUs.jpeg" />

//           <section className={styles.connetUsContet}>
//             <h2>Connect With Us</h2>
//             <p>
//               We’re here to help you! Reach out for bookings, inquiries, or
//               feedback — we’d love to hear from you.
//             </p>
//           </section>
//         </div>

//         <div className={styles.cardForm}>
//           <div className={styles.cardFormContent}>
//             <div className={styles.contactCards}>
//               <div className={styles.card}>
//                 <PiPhoneCallFill />
//                 <h3>Call Us</h3>
//                 <p>+91 9574352195</p>
//               </div>

//               <div className={styles.card}>
//                 <MdEmail />
//                 <h3>Email</h3>
//                 <p>hotelgolden.info@gmail.com</p>
//               </div>

//               <div className={styles.card}>
//                 <FaMapMarkerAlt />
//                 <h3>Visit Us</h3>
//                 <p>Hotel Golden, Kirtistambh Circle, Palanpur</p>
//               </div>
//             </div>

//             <form
//               ref={form}
//               className={styles.connectForm}
//               onSubmit={sendEmail}
//             >
//               <h1>Get in touch</h1>
//               <input type="text" name="name" placeholder="Your Name" required />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//               />

//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>

//         <div className={styles.map}>
//           <div className={styles.mapContainer}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9122349255163!2d72.43056947434069!3d24.17481057235262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9675dd94591%3A0x8a0e7701e0e3231!2sHotel%20Golden%2C%20Palanpur!5e0!3m2!1sen!2sin!4v1760529653784!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Hotel Golden location"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ContactUs;


import React, { useRef } from "react";
import styles from "../../styles/ConnectUs.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xxxxxx", // 🔹 apna EmailJS service ID yahan daalna
        "template_xxxxxx", // 🔹 apna template ID yahan daalna
        form.current,
        "user_xxxxxx" // 🔹 apna public key yahan daalna
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error sending message:", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <main>
      <div className={styles.mainContaier}>
        <div className={styles.coonetUsimg}>
          <img src="assets/ConnectUs.jpeg" alt="Connect with us" />

          <section className={styles.connetUsContet}>
            <h2>Connect With Us</h2>
            <p>
              We’re here to help you! Reach out for bookings, inquiries, or
              feedback — we’d love to hear from you.
            </p>
          </section>
        </div>

        <div className={styles.cardForm}>
          <div className={styles.cardFormContent}>
            <div className={styles.contactCards}>
              {/* 📞 Clickable Call Us */}
              <a
                href="tel:+919574352195"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiPhoneCallFill />
                <h3>Call Us</h3>
                <p>+91 9574352195</p>
              </a>

              {/* 📧 Clickable Email */}
              <a
                href="mailto:hotelgolden.info@gmail.com"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
                <h3>Email</h3>
                <p>hotelgolden.info@gmail.com</p>
              </a>

              {/* 📍 Clickable Visit Us */}
              <a
                href="https://www.google.com/maps?q=Hotel+Golden+Kirtistambh+Circle+Palanpur"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt />
                <h3>Visit Us</h3>
                <p>Hotel Golden, Kirtistambh Circle, Palanpur</p>
              </a>
            </div>

            {/* ✉️ Contact Form */}
            <form
              ref={form}
              className={styles.connectForm}
              onSubmit={sendEmail}
            >
              <h1>Get in touch</h1>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* 🗺️ Map Section */}
        <div className={styles.map}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9122349255163!2d72.43056947434069!3d24.17481057235262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9675dd94591%3A0x8a0e7701e0e3231!2sHotel%20Golden%2C%20Palanpur!5e0!3m2!1sen!2sin!4v1760529653784!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Golden location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
