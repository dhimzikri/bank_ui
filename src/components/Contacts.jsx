import React, { useRef } from "react";
import "../index.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../style";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zo7lpju",
      "template_wasv256",
      form.current,
      "h7J0Yg0jT_ItXFF1V"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2 className={`${styles.heading2}`}>Get in Touch</h2>
      <p className="font-poppins font-medium text-dimWhite">Contact Me</p>

      <div className="container container-contact">
        <div className="contact_options bg-emerald-800 rounded-2xl">
          <article className="contact_option hover:bg-emerald-700 font-poppins font-medium">
            <div className="flex flex-col items-center justify-center text-dimWhite">
              <HiOutlineMail className="text-3xl" />
              <h4>Email</h4>
              <h5>dschok182@gmail.com</h5>
              <button
                href="mailto:dschok182@gmail.com"
                target="_blank"
                type="button"
                className={`text-black p-3 font-poppins text-sm text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Send a Message
              </button>
            </div>
          </article>
          <article className="contact_option hover:bg-emerald-700 font-poppins font-medium">
            <div className="flex flex-col items-center justify-center text-dimWhite">
              <BsInstagram className="contact_options-icon" />
              <h4>DM Instagram</h4>
              <h5>Dimas Zikri (dhimzikri)</h5>
              <button
                href="http://intagram.com/dhimzikri"
                target="_blank"
                type="button"
                className={`p-3 font-poppins text-sm text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Send a Message
              </button>
            </div>
          </article>
          <article className="contact_option hover:bg-emerald-700 font-poppins font-medium">
            <div className="flex flex-col items-center justify-center text-dimWhite">
              <BsWhatsapp className="contact_options-icon" />
              <h4>WhatsApp Me on</h4>
              <h5>085780457067 / 085885606896</h5>
              <button
                href="http://intagram.com/dhimzikri"
                target="_blank"
                type="button"
                className={`p-3 font-poppins text-sm text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              >
                Send a Message
              </button>
            </div>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <div className="font-poppins rounded-lg ">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="bg-emerald-700 text-white"
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              className="bg-emerald-700 text-white"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="bg-emerald-700 text-white"
              name="message"
              rows="9"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className={`p-3 font-poppins text-md text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
