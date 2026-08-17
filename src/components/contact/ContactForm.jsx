"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect API / email service
    console.log(form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <div className="relative mx-auto max-w-5xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
            Send a Message
          </span>

          <h2 className="mt-6 text-4xl font-black text-emerald-600 md:text-5xl">
            Request a <span>Free Consultation</span>
          </h2>

          <p className="mx-auto mt-3 text-sm font-bold max-w-2xl text-slate-600">
            Fill out the form below and our medical billing experts
            will contact you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          onSubmit={handleSubmit}
          className="rounded-2xl border-3 border-emerald-500 bg-white p-8 shadow-2xl md:p-10"
        >

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded border-2 border-emerald-500 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded border-2 border-emerald-500 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
                className="w-full rounded border-2 border-emerald-500 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Medical Billing Inquiry"
                className="w-full rounded border-2 border-emerald-500 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700">
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us about your practice and how we can help..."
              className="w-full rounded border-2 border-emerald-500 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <div className="mt-5 flex justify-center">
            <Button
              title="Send Message"
              icon={Send}
              variant="primary"
              size="md"
            />
          </div>

        </motion.form>

      </div>
    </section>
  );
}