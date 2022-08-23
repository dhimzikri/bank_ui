import React, { useRef } from "react";
import "../index.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import styles, { layout } from "../style";
import { wisata2 } from "../assets";
import emailjs from "@emailjs/browser";
  
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
      <h2
        className={`${styles.heading2} flex justify-center items-center p-4 mt-4 gap-6`}
      >
        Get in Touch
      </h2>
      <p className="font-poppins font-medium text-dimWhite flex justify-center -mt-6 items-center">
        Contact Me
      </p>

      <div className="grid grid-cols-3 w-full h-auto gap-8 mt-4 ">
        <div className="flex flex-col bg-emerald-800 rounded-2xl w-auto h-auto items-center justify-center">
          <article className="contact_option hover:bg-emerald-700 font-poppins font-medium">
            <div className="flex flex-col items-center justify-center text-white">
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
            <div className="flex flex-col items-center jusstify-center text-white">
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
            <div className="flex flex-col items-center justify-center text-white">
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
        <div className="gap-2 w-full h-full font-poppins rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="bg-emerald-700 text-white w-auto h-auto"
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
        <div className="w-[80%] h-full rounded-xl bg-emerald-700 flex items-center justify-center ">
          <img src={wisata2} className="rounded-xl mt-1 ml-28" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
