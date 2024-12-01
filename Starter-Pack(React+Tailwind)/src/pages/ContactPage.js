import React from 'react';

const ContactPage = () => (
  <section className="py-16">
    <h2 className="text-4xl text-center text-blue-500 mb-8">Contact Me</h2>
    <form className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="block w-full mb-4 px-4 py-2 border"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="block w-full mb-4 px-4 py-2 border"
      />
      <textarea
        placeholder="Your Message"
        className="block w-full mb-4 px-4 py-2 border h-32"
      ></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white py-2">
        Submit
      </button>
    </form>
  </section>
);

export default ContactPage;
