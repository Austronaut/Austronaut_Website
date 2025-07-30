"use client";
import { useState } from "react";
import Image from "next/image";
import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    team: "general",
  });

  const recipientEmails = {
    general: "unswaustronauts@gmail.com",
    instruments: "m.montiel@student.unsw.edu.au",
    bus: "ray.feng@student.unsw.edu.au",
    software: "d.dessai@student.unsw.edu.au",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message, team } = form;
    const recipient = recipientEmails[team] || recipientEmails.general;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setForm({ name: "", email: "", subject: "", message: "", team: "general" });
  };

  const inputClass =
    "w-full p-3 text-white bg-black border border-gray-600 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:scale-[1.02]";

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Full-page Galaxy background */}
      <Galaxy className="absolute inset-0 z-0" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow w-full flex flex-col items-center py-16 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Image
              src="/logos/main-logo-transparent.png"
              alt="UNSW Austronauts Logo"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h1 className="text-6xl font-inter-bold tracking-tight text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-4 text-md font-inter-regular max-w-xl mx-auto text-gray-300">
              Whether you're interested in collaborating, sponsoring, or learning more about our mission,
              feel free to reach out below.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl rounded-2xl shadow-lg p-8 flex flex-col gap-6 bg-black/80 backdrop-blur-md"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-2 text-gray-300">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2 text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-2 text-gray-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                type="text"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="team" className="block font-medium mb-2 text-gray-300">
                Choose Team to Contact
              </label>
              <select
                id="team"
                name="team"
                value={form.team}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="general">General</option>
                <option value="instruments">Instruments</option>
                <option value="bus">Business</option>
                <option value="software">Software</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 ease-in-out text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </main>

      </div>
    </div>
  );
}
