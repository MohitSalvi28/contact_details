import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("anshu");
  const [email, setEmail] = useState("abc@gmail.com");
  const [text, setText] = useState("this is it");

  const onSumbit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize="24px" />}
        />

        <form onSubmit={onSumbit}>
          <div className={styles.form_contol}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_contol}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_contol}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Contact.svg" alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;
