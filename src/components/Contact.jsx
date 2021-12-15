import axios from "axios";
import { useState } from "react";
import cv from "../docs/cv.pdf";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://matthieudubo.herokuapp.com/",
        {
          name: name,
          subject: subject,
          email: email,
          message: message,
        },
        { withCredentials: true }
      )
      .catch((err) => console.log(err));
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__map" />
      <div className="contact__form">
        <h2 className="title">Contact Me</h2>
        <p>
          I am looking for an internship from February 2022 and for a period of
          4 to 6 months. However, don't hesitate to contact me if you have a
          request or a question.
          <br />
          <span className="little-text">
            Click{" "}
            <a href={cv} download="CV_Matthieu_Dubo.pdf">
              <span className="purple-text">here</span>
            </a>{" "}
            to download my CV.
          </span>
        </p>
        <form onSubmit={(e) => sendMail(e)}>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
