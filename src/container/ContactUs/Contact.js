import React, { useState } from "react";

import Card from "../../components/UI/Card/Card";

import Layout from "../../components/Layout/Layout";

import "./style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();

    alert("Your information was send!");
  };

  return (
    <Layout>
      <Card>
        <div className="contactHeader">
          <h1 className="contactTitle">Contact Us</h1>
        </div>
        <div className="contactContent">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            sequi doloremque neque consequatur rerum ipsam. Laboriosam
            architecto in quam, soluta ipsa autem quaerat. Nobis, eum quaerat.
            Debitis perferendis quaerat neque!
          </p>
        </div>

        <div className="formContact">
          <form onSubmit={submitForm}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label>
              Subject:
              <textarea
                type="text"
                name="message"
                rows="5"
                cols="30"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </label>
            <button className="sendBtn">Send</button>
          </form>
        </div>
      </Card>
    </Layout>
  );
};

export default Contact;
