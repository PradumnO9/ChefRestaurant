import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-16">
      <div className="flex text-center px-6 py-2 w-[20%] m-auto border-2 border-solid border-gray-200 rounded-md shadow-md">
        <form className="p-4">
          <h1 className="font-bold mb-2">Contact Form</h1>
          <input
            type="text"
            placeholder="name"
            className="border border-gray-300 m-2 p-2"
          />
          <br />
          <input
            type="text"
            placeholder="message"
            className="border border-gray-300 m-2 p-2"
          />
          <br />
          <button className="border border-gray-300 rounded-lg m-2 py-1 px-2 bg-black text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
