"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/siteConfig";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Construct WhatsApp message
    const message = `New Service Request:
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message || "N/A"}`;

    openWhatsApp(message);
    setIsSubmitting(false);
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Directly",
      value: siteConfig.phoneNumber,
      action: () => makePhoneCall(),
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      value: "Chat with us",
      action: () => openWhatsApp(),
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: siteConfig.email,
      action: () => window.location.href = `mailto:${siteConfig.email}`,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: siteConfig.locations,
      action: null,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
          >
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">24/7 Availability</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Get Your Appliance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Fixed Today
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Fast, reliable service when you need it most. Contact us now for a free quote or immediate repair.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={item.action || undefined}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${!item.action && "cursor-default"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-white font-bold text-lg">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20 mt-8">
              <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Need Immediate Help?
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                Our emergency team is on standby 24/7 for urgent repairs.
              </p>
              <button
                onClick={() => makePhoneCall()}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/20"
              >
                Call Emergency Line
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-8">Request a Service</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Name</label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="050 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Service Needed</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  >
                    <option value="" className="bg-slate-900">Select a service...</option>
                    <option value="Washing Machine" className="bg-slate-900">Washing Machine Repair</option>
                    <option value="Refrigerator" className="bg-slate-900">Refrigerator Repair</option>
                    <option value="Dishwasher" className="bg-slate-900">Dishwasher Repair</option>
                    <option value="AC Repair" className="bg-slate-900">AC Repair</option>
                    <option value="Oven/Stove" className="bg-slate-900">Oven/Store Repair</option>
                    <option value="Other" className="bg-slate-900">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs">{errors.service.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Describe your issue..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
