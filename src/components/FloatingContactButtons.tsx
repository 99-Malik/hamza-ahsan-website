"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";

export function FloatingContactButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPulse((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setShowPulse(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-4 relative group"
            >
              <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                WhatsApp Us
              </span>
              <button
                onClick={() => openWhatsApp()}
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </button>
            </motion.div>

            {/* Call Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mb-4 relative group"
            >
              <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Call Now
              </span>
              <button
                onClick={() => makePhoneCall()}
                className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-7 h-7 text-white" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleExpanded}
        className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center shadow-xl shadow-slate-900/30 relative z-10 hover:scale-105 transition-transform duration-300"
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Effect */}
        {!isExpanded && showPulse && (
          <span className="absolute inset-0 rounded-full bg-slate-900 animate-ping opacity-20" />
        )}

        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Phone className="w-7 h-7 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
