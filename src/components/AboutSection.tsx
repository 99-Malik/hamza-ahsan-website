"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Shield, Users, TrendingUp, Wrench } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our team consists of licensed and certified professionals with extensive training in appliance repair.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repair services available throughout Dubai and Abu Dhabi.",
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "All repairs come with comprehensive warranty coverage and genuine parts guarantee.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to providing exceptional service and customer satisfaction.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience", icon: TrendingUp },
    { value: "5,000+", label: "Happy Customers", icon: Users },
    { value: "98%", label: "Success Rate", icon: Award },
    { value: "24/7", label: "Available", icon: Clock },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

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
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Professional Appliance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Repair Center
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted appliance repair services in {siteConfig.locations} with over 15 years of experience serving thousands of satisfied customers.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-white">
                Your Trusted Appliance Repair Partner
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                We are a professional appliance repair service center specializing in diagnosing and repairing all major home appliances. With over 15 years of experience, we have built a reputation for excellence in {siteConfig.locations}.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our certified technicians undergo regular training to stay updated with the latest technologies and repair techniques. We understand that broken appliances can disrupt your daily routine, which is why we offer same-day service and emergency repairs.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                "Licensed and insured technicians",
                "Genuine manufacturer parts only",
                "Comprehensive warranty on all repairs",
                "24/7 emergency service available",
                `Same-day service in ${siteConfig.locations}`,
                "Transparent pricing with no hidden fees",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
