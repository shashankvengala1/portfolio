import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="mb-4">
              <p className="font-medium">Email</p>
              <p className="text-sm">shashaank.shashank@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="font-medium">Phone</p>
              <p className="text-sm">+91-8499883581</p>
            </div>
            <div className="mb-4">
              <p className="font-medium">Location</p>
              <p className="text-sm">Hyderabad, INDIA</p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:shashaank.shashank@gmail.com"
                className="inline-flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600 transition"
              >
                📧 Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/shashaank/"
                target="_blank"
                rel="noreferrer"
                className="ml-4 text-teal-500 hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition"
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
