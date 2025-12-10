"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { siteConfig, services } from "@/config/siteConfig";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I need Home Appliance Repair Services\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${
      services.find((s) => s.id === formData.service)?.name || "Not specified"
    }\nMessage: ${formData.message}`;
    openWhatsApp(whatsappMessage);
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: siteConfig.phoneNumber,
      action: () => makePhoneCall(),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      action: () => openWhatsApp(),
    },
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      action: () => window.location.href = `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: siteConfig.locations,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Contact Our Appliance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Repair Center
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our expert technicians for professional appliance repair services in {siteConfig.locations}.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div
                onClick={info.action || undefined}
                className={`w-full h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${
                  info.action ? "cursor-pointer hover:scale-105" : ""
                }`}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-white">{info.title}</h3>
                <p className="text-sm text-slate-400">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-slate-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-slate-500"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-slate-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Service Needed
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger 
                      className="w-full !h-12 !py-0 px-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-white/20 data-[placeholder]:text-slate-500 text-white font-medium [&[data-size=default]]:!h-12 [&[data-size=default]]:!py-0"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent 
                      className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl mt-1 max-h-[280px] overflow-y-auto z-50"
                      position="popper"
                    >
                      {services.map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.id}
                          className="px-4 py-3 text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary cursor-pointer transition-colors rounded-lg mx-1 my-0.5 font-medium text-sm"
                        >
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="w-full min-h-[120px] px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-white placeholder:text-slate-500"
                    placeholder="Tell us about your appliance issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Need Immediate Help?</h3>
                  <p className="text-slate-400 text-sm">We're available 24/7</p>
                </div>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Don't wait for your appliance to break down completely. Contact us now for same-day service and expert repair solutions.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => makePhoneCall()}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </button>
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4">Service Hours</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="font-semibold text-primary">Emergency Service</span>
                  <span className="font-semibold text-primary">24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
