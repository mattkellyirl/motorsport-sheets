import React from "react";

function Contact() {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="py-8 px-4 lg:py-16 max-w-screen-sm w-full">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-black">
          Contact Us
        </h2>

        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 text-center"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
