import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-blue-900 flex justify-center items-center p-4 text-white"
    >
      <form
        action="https://getform.io/f/31313319-e886-40c5-af98-21b4317d9014"
        method="POST"
        className="flex flex-col max-w-md w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">Submit the form below or shoot me an email</p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-2 bg-white text-black"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="my-4 p-2 bg-white text-black"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="10"
          className="bg-white text-black p-2"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
