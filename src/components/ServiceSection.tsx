"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Wrench, Clock, Shield, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { siteConfig, services } from "@/config/siteConfig";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceWhatsApp = (serviceName: string) => {
    openWhatsApp(`Hello! I'm interested in ${serviceName} service. Please contact me.`);
  };

  const processSteps = [
    {
      number: "01",
      title: "Book Appointment",
      description: "Schedule your service online or call us directly. We offer flexible timing to suit your needs.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Expert Diagnosis",
      description: "Our certified technician will inspect your appliance and provide a detailed, transparent quote.",
      icon: Wrench,
    },
    {
      number: "03",
      title: "Professional Repair",
      description: "We fix your appliance using genuine parts and provide comprehensive warranty coverage.",
      icon: Shield,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

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
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Professional Appliance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Repair Services
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert repair solutions for all your home appliances in {siteConfig.locations}. Professional technicians, genuine parts, and guaranteed satisfaction.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group"
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden backdrop-blur-md">
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl shadow-lg mb-3 border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-white transition-colors duration-300">{service.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6 pt-4">
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">{service.description}</p>

                  <div className="mb-6 space-y-3">
                    {service.commonIssues.slice(0, 3).map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => makePhoneCall()}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                    <button
                      onClick={() => handleServiceWhatsApp(service.name)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      <span>Chat</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          <div className="relative p-8 lg:p-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Simple 3-Step Process
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Getting your appliance fixed has never been easier. Follow our simple process for professional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-display font-bold text-white/5 select-none">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-white/10">
                      <ArrowRight className="w-4 h-4 text-slate-600 absolute -right-2 -top-2" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => makePhoneCall()}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </button>
                <button
                  onClick={() => openWhatsApp()}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
