"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { makePhoneCall } from "../utils/contactActions";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-slate-950 text-slate-400 py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{siteConfig.locations}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phoneNumber}`} className="hover:text-white transition-colors">
              {siteConfig.phoneNumber}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3 lg:top-0"
          : "bg-transparent py-5 lg:top-9"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-display font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-display font-bold leading-none transition-colors ${isScrolled || isMobileMenuOpen ? "text-white" : "text-white lg:text-white"
                  }`}>
                  Appliance
                </span>
                <span className={`text-sm leading-none tracking-wide transition-colors ${isScrolled || isMobileMenuOpen ? "text-slate-400" : "text-slate-300 lg:text-slate-300"
                  }`}>
                  Repair Website
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-slate-300" : "text-slate-200"
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => makePhoneCall()}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-slate-200 py-2 border-b border-white/5 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4">
                  <button
                    onClick={() => makePhoneCall()}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-500/20"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <Clock className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-slate-400">Working Hours</p>
                      <p className="text-sm font-medium text-white">{siteConfig.workingHours}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <MapPin className="w-5 h-5 text-primary mb-2" />
                      <p className="text-xs text-slate-400">Service Area</p>
                      <p className="text-sm font-medium text-white">{siteConfig.locations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
