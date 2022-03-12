import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [captcha, setCaptcha] = useState(null);
  const form = useRef();

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setCaptcha(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (captcha) {
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
    } else return alert("Nie zaznaczyłeś captcha!");
  };

  return (
    <div className="footer-contact">
      <h2>Odezwij się do Nas!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Imię"
          required
          aria-required="true"
          minLength="3"
        />
        <br />
        <input type="email" name="user_email" placeholder="Email" />
        <br />
        <textarea
          name="message"
          placeholder="Wpisz treść wiadomości"
          required
          aria-required="true"
          minLength="3"
        />
        <br />
        <div className="captcha">
          <input className="submit-input" type="submit" value="Wyślij" />
          <ReCAPTCHA
            sitekey="6LeMjrMeAAAAADGl_cIPuxbseIf_jpN7o4s_bqmD"
            onChange={handleCaptcha}
          />
        </div>
      </form>
      <div className="footer-result">{result ? <Result /> : null}</div>
    </div>
  );
};

export default Contact;
