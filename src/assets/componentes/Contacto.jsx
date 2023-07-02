import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_bi5k92u",
        "template_eyn529f",
        form.current,
        "7UXIzfoM-M7LJRGYU"
      )
      .then(
        (result) => {},
        (error) => {}
      );
  };

  return (
    <div id="contacto" className="flex flex-col items-center p-6 ">
      <div>
        <h2 className="text-center mt-20 font-bold mb-5 text-5xl text-cyan-400 animate-pulse">
          Contact me
        </h2>
      </div>

      <form
        className="flex flex-col gap-[1rem]"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="space-y-4 md:space-y-0 md:flex md:space-x-2">
        {" "}
        <input
          className="bg-gray-600 rounded text-white px-2 w-[18rem] md:w-[40rem] "
          type="text"
          name="user_name"
          placeholder="Nome"
        />
        <input
          className="bg-gray-600 rounded text-white px-2 w-[18rem] md:w-[40rem]"
          type="email"
          name="user_email"
          placeholder="E-mail Adress"
        />
        </div>
        <input
          className="bg-gray-600 rounded text-white px-2"
          name="Subject Field"
          placeholder="Subject Field"
          type="text"
        />
        <textarea
          className="bg-gray-600 rounded text-white px-2 h-[10rem]"
          name="message"
          placeholder="Message"
        />
        <button className="bg-cyan-300 hover:bg-cyan-500 font-bold rounded-3xl w-[10rem] md:w-[15rem]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacto;
