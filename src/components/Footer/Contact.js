import React, { useRef, useState } from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>
      Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą najszybciej
      jak się da.
    </p>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);

  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);

  // const message = watch("message") || "";
  // const messageCharsLeft = 1500 - message.length;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9xcvuxw",
        "template_7kdlim9",
        form.current,
        "8oZACKN5FIxP25BOJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);

    setTimeout(() => setResult(false), 5000);
  };

  return (
    <div className="footer-contact">
      <h2>Odezwij się do Nas!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Imię" />
        <br />
        <input type="email" name="user_email" placeholder="Email" />
        <br />
        <textarea name="message" placeholder="Wpisz treść wiadomości" />
        <br />
        <input className="submit-input" type="submit" value="Wyślij" />
      </form>
      <div className="footer-result">{result ? <Result /> : null}</div>
    </div>
  );
};

export default Contact;
