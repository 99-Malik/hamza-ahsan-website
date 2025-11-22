"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2, ArrowRight, Sparkles, Star, Shield, Clock } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";

export function HeroSection() {
  const stats = [
    { value: "5k+", label: "Happy Customers", icon: Star },
    { value: "15+", label: "Years Experience", icon: Shield },
    { value: "24/7", label: "Emergency Service", icon: Clock },
  ];

  const features = [
    "Licensed Technicians",
    "Genuine Parts",
    "90-Day Warranty",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Appliance Repair Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-slate-200">
                #1 Rated Appliance Repair in UAE
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
              >
                Expert Repair <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                  Solutions
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-400 max-w-lg leading-relaxed"
              >
                Fast, reliable, and professional appliance repair services across {siteConfig.locations}. We bring life back to your appliances.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => makePhoneCall()}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>WhatsApp</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group ${index === 2 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative glow behind cards */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
