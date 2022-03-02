import React from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="footer-contact">
      <h2>Odezwij się do Nas!</h2>
      <form>
        <input type="text" name="user_name" placeholder="Imię" />
        <br />
        <input type="email" name="user_email" placeholder="Email" />
        <br />
        <textarea name="message" placeholder="Wpisz treść wiadomości" />
        <br />
        <input type="submit" value="Wyślij" />
      </form>
    </div>
  );
};

export default Contact;
