"use client";
import { useState } from "react";
import Image from "next/image";
import  DotGrid  from "@/components/backgrounds/DotGrid/DotGrid";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Placeholder)"); // Replace with actual form handling
  };


return (
  <div className="relative w-full h-screen">
    <DotGrid
      dotSize={5}
      gap={15}
      baseColor="#000000"
      activeColor="#FFFFFF"
      proximity={120}
      shockRadius={250}
      shockStrength={5}
      resistance={750}
      returnDuration={1.5}
      className="absolute top-0 left-0 inset-0 z-0"
    />

    {/* Content */}
    <div className="absolute top-0 left-0 z-10 w-full flex flex-col items-center py-16 px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <Image
        src="/logos/main-logo-transparent.png"
        alt="UNSW Austronauts Logo"
        width={150}
        height={150}
        className="mx-auto mb-4"
      />
      <h1 className="text-6xl font-inter-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-md font-inter-regular max-w-xl mx-auto">
        Whether you're interested in collaborating, sponsoring, or learning more about our mission,
        feel free to reach out below.
      </p>
    </div>

    {/* Contact Form */}
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl shadow-lg p-8 flex flex-col gap-6"
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
          className="w-full p-3 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full p-3 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
          className="w-full p-3 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* I need you to add a dropdown allowing the user to select who to send the email to */}
      <div>
        <label htmlFor="recipient" className="block font-medium mb-2 text-gray-300">
          Send To
        </label>
        <select
          id="recipient"
          name="recipient"
          required
          className="w-full p-3 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {/* Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
          <option value="" disabled selected>
            Select a recipient
          </option>
          <option value="general">General Enquiries</option>
          <option value="sponsorship">Sponsorship</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </div>

      <button
        type="submit"
        className="hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition"
      >
        Send Message
      </button>
    </form>

  </div>
</div>
)
}