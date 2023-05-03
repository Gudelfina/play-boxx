import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_alhf6di",
        "template_vi2ditx",
        {
          from_name: form.name,
          to_name: "PlayBoxx",
          from_email: form.email,
          to_email: "playboxxteam@gmail.com",
          message: form.message,
        },
        "oPN1LXb6hHyTYaeQr"
      )
      .then(() => {
        toast.success("Submitted! We'll get back to you soon!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Something went wrong while submitting the form.");
      });
  };

  return (
    <div className="h-screen bg-beige/50">
      <div className="items-center flex flex-col h-full px-6 py-24">
        <div className="mb-8">
          <div>
            <div className="text-transform: uppercase font-sans text-center mb-6">
              contact us
            </div>
          </div>
          <div className="mb-2">
            <h1 className="text-center text-3xl m">
              We'd love to hear from you!
            </h1>
          </div>
        </div>
        <div className="w-96 h-96 max-w-xl rounded-full items-center flex flex-col justify-center bg-gradient-to-b from-hoverpink to-beige">
          <div>
            <h5 className="pt-6 mb-4">Send us a Message</h5>
          </div>
          <form
            className="flex flex-col items-center"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="pb-4">
              <input
                className="rounded-lg text-sm w-[230px] border-none"
                required
                id="name"
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="rounded-lg text-sm w-[230px] border-none"
                required
                id="email"
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="pt-4">
              <textarea
                className="rounded-lg text-sm w-full pt-2 px-4 py-3 sm:w-auto border-none"
                required
                id="message"
                name="message"
                value={form.message}
                placeholder="Enter your message"
                rows={5}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="focus:outline-none text-white bg-red-400 hover:bg-hoverpink font-medium rounded-lg text-sm w-full pt-4 px-5 py-2.5 text-center sm:w-auto border-b-4 border-black"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
