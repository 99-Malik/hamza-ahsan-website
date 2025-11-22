"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ThumbsUp } from "lucide-react";
import { Card } from "./ui/card";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      location: "Dubai Marina",
      rating: 5,
      text: "The technician arrived exactly on time and fixed my washing machine in less than an hour. Very professional and clean work. Highly recommended!",
      date: "2 days ago",
      service: "Washing Machine Repair"
    },
    {
      id: 2,
      name: "Mohammed Al-Fayed",
      location: "Downtown Dubai",
      rating: 5,
      text: "Excellent service! My refrigerator stopped cooling on a Friday night, and they came immediately. Saved all my groceries. Fair price too.",
      date: "1 week ago",
      service: "Refrigerator Repair"
    },
    {
      id: 3,
      name: "Jessica Thompson",
      location: "Palm Jumeirah",
      rating: 5,
      text: "I've used many repair services in Dubai, but this was by far the best experience. Professional, courteous, and they actually fixed the problem.",
      date: "2 weeks ago",
      service: "Dishwasher Repair"
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <ThumbsUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Trusted by Thousands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              of Happy Customers
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Quote className="w-24 h-24 text-white" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 italic">
                      "{testimonials[activeIndex].text}"
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <div>
                        <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <span>{testimonials[activeIndex].location}</span>
                          <span>•</span>
                          <span className="text-primary">{testimonials[activeIndex].service}</span>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonials[activeIndex].date}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-12">
          {[
            { icon: Star, label: "4.9/5 Rating", sub: "Based on 500+ reviews" },
            { icon: CheckCircle2, label: "Verified Pros", sub: "Background checked" },
            { icon: ShieldCheck, label: "Licensed", sub: "Fully insured service" },
            { icon: ThumbsUp, label: "Satisfaction", sub: "100% guaranteed" },
          ].map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-slate-400" />
              </div>
              <h5 className="font-bold text-white mb-1">{badge.label}</h5>
              <p className="text-xs text-slate-500">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
