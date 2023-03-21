import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./EmailForm.module.css";
import Modal from "./UI/Modal";

export const EmailForm = () => {
  const [modal, setModal] = useState({
    open: false,
    message: "hello",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2qd04eu",
        "berettaElectric_ijwtb3p",
        form.current,
        "RPyzcAsj9NQpZDRKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModal({
            open: true,
            message: "Message sent successfully. We will respond soon!",
          });
        },
        (error) => {
          console.log(error.text);
          setModal({
            open: true,
            message: "Error sending. Please call directly at 250-808-1849",
          });
        }
      );
  };

  const closeModal = () => {
    setModal({
      show: false,
      message: "",
    });
  };

  return (
    <>
      <div className={classes.container}>
        <form ref={form} onSubmit={sendEmail}>
          <p id="contactUs">CONTACT US</p>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Callback Phone"
            required
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
      <Modal modal={modal} onClose={closeModal}></Modal>
    </>
  );
};

export default EmailForm;
