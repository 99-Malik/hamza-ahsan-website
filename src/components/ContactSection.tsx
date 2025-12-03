"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, Clock } from "lucide-react";
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
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      action: () => openWhatsApp(),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      action: () => window.location.href = `mailto:${siteConfig.email}`,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: siteConfig.locations,
      action: null,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Our Appliance Repair Center
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our expert technicians for professional appliance repair services in {siteConfig.locations}.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                className={`w-full h-full bg-gradient-to-br ${info.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                  info.action ? "cursor-pointer hover:scale-105" : ""
                }`}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-sm text-white/90">{info.value}</p>
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
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full h-12 px-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full h-12 px-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full h-12 px-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger 
                      className="w-full !h-12 !py-0 px-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 outline-none transition-all hover:border-gray-300 data-[placeholder]:text-gray-400 text-gray-700 font-medium [&[data-size=default]]:!h-12 [&[data-size=default]]:!py-0"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent 
                      className="bg-white border-2 border-gray-200 rounded-xl shadow-2xl mt-1 max-h-[280px] overflow-y-auto z-50"
                      position="popper"
                    >
                      {services.map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.id}
                          className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 cursor-pointer transition-colors rounded-lg mx-1 my-0.5 font-medium text-sm"
                        >
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="w-full min-h-[120px] px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your appliance issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200"
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
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                  <p className="text-blue-100 text-sm">We're available 24/7</p>
                </div>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Don't wait for your appliance to break down completely. Contact us now for same-day service and expert repair solutions.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => makePhoneCall()}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Call Us Now</span>
                </button>
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl border-2 border-green-400 hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Service Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold text-blue-600">Emergency Service</span>
                  <span className="font-semibold text-blue-600">24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
