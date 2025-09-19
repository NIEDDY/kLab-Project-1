import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xblkwewg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b debug-header">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center debug-header-inner">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 debug-header-title">
            Contact Us
          </h1>
          <nav className="text-sm text-gray-500 debug-header-nav">
            <span>Home</span> / <span>Contact Us</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg shadow-lg p-6">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-2/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">Send Us Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-300 p-2 w-full md:w-3/4 rounded"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">Oops! Something went wrong.</p>
            )}
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-1/3 pl-0 md:pl-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4 text-gray-700">
              For more Information or/and any query, please contact us at the
              following address: niedd03@gmail.com
            </p>
            <h3 className="font-semibold">Our Office</h3>
            <p className="mb-2">Address: 106 Street, New City, United States.</p>
            <p className="mb-2">Phone: (0123) 245 9870</p>
            <p className="mb-2">Email: Mail@Example.com</p>
            <h3 className="font-semibold mt-4">Working Hours</h3>
            <p>Monday - Friday: 9am to 7pm</p>
            <p>Saturday: 9am to 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

