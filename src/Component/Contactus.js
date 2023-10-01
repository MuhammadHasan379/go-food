import React from "react";
import "./Contactus.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";

export default function Contactus() {
  const form = useRef();

  const [success, setSuccess] = useState(false);

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 6000);

    emailjs
      .sendForm(
        "service_to6gy3r",
        "template_u3pfo74",
        form.current,
        "e3Q1iUvMBqCI5Ac0Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
          setDone(false)
        }
      );
  };

  return (
    <section>
      <h1 style={{ margin: "2em 1em auto auto" }}>Contact us</h1>
      <hr />
      <div className="Contact-wrapper">
        <form ref={form} onSubmit={sendEmail} >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="Credentials"
            style={{ borderRadius: "0.1em", border: "none" }}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="Credentials"
            style={{ borderRadius: "0.1em", border: "none" }}
          />
          <label>Message</label>
          <textarea name="message" className="MessageArea" />
          <input type="submit" className="submit" value="Send" />
        </form>
      </div>
      {success ? (
        <Popup
          trigger={
          done? <p className="popup">Message Sent </p>
          : <p>Error Sending Message</p>}
          position="right center"
        >
          <div>Popup content here !!</div>
        </Popup>
      ) : (
        <div></div>
      )}
    </section>
  );
}
