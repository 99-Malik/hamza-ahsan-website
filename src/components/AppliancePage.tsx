"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2, Clock, Shield, Wrench, Star, AlertCircle, ArrowRight, Users, Award, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import { siteConfig, services } from "@/config/siteConfig";
import { makePhoneCall, openWhatsApp } from "../utils/contactActions";
import Link from "next/link";

interface AppliancePageProps {
  serviceId: string;
}

export function AppliancePage({ serviceId }: AppliancePageProps) {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/" className="text-primary hover:underline text-sm sm:text-base">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced content for each appliance type
  const applianceContent: Record<string, {
    heroTitle: string;
    heroDescription: string;
    overview: string;
    benefits: string[];
    detailedIssues: Array<{ issue: string; description: string; solution: string }>;
    maintenanceTips: string[];
    brands: string[];
    faqs: Array<{ question: string; answer: string }>;
    whyChooseUs: string[];
  }> = {
    "washing-machine": {
      heroTitle: "Expert Washing Machine Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Professional washing machine repair services for all major brands. Same-day service, certified technicians, and genuine parts guaranteed. Serving ${siteConfig.locations} with 15+ years of experience.`,
      overview: `Your washing machine is one of the most essential appliances in your home. When it breaks down, it can disrupt your daily routine. At Appliance Masters UAE, we provide comprehensive washing machine repair services across ${siteConfig.locations}. Our certified technicians have extensive experience repairing all major brands including Bosch, Siemens, LG, Samsung, and more.`,
      benefits: [
        "Same-day service available across Dubai and Abu Dhabi",
        "Certified technicians with 15+ years of experience",
        "Genuine manufacturer parts with warranty",
        "Transparent pricing with no hidden fees",
        "90-day warranty on all repairs",
        "24/7 emergency service available"
      ],
      detailedIssues: [
        {
          issue: "Washing Machine Not Spinning",
          description: "Your washing machine completes the cycle but doesn't spin, leaving clothes soaking wet.",
          solution: "This is often caused by a faulty drive belt, worn-out motor brushes, or a broken lid switch. Our technicians will diagnose and replace the necessary components."
        },
        {
          issue: "Water Leakage",
          description: "Water leaking from your washing machine can cause damage to your floor and surrounding areas.",
          solution: "Common causes include damaged door seals, loose hose connections, or a faulty water inlet valve. We'll identify the source and fix it promptly."
        },
        {
          issue: "Not Draining Properly",
          description: "Water remains in the drum after the cycle completes, indicating a drainage problem.",
          solution: "Blocked drain pump, clogged drain hose, or faulty drain pump filter. We'll clean or replace the affected components."
        },
        {
          issue: "Unusual Noises",
          description: "Loud banging, grinding, or squealing sounds during operation.",
          solution: "Worn bearings, loose drum, or foreign objects in the drum. Our technicians will inspect and repair the issue."
        },
        {
          issue: "Not Starting",
          description: "The washing machine doesn't power on or start when you press the start button.",
          solution: "Could be a faulty power supply, broken door lock, or control board issue. We'll diagnose and fix the problem."
        },
        {
          issue: "Error Codes Display",
          description: "Your washing machine displays error codes like E01, E02, or other manufacturer-specific codes.",
          solution: "Each error code indicates a specific problem. Our technicians are trained to interpret and fix all error codes for major brands."
        }
      ],
      maintenanceTips: [
        "Clean the detergent drawer monthly to prevent buildup",
        "Run a hot wash cycle with vinegar monthly to remove odors",
        "Check and clean the door seal regularly",
        "Don't overload the machine - follow manufacturer's guidelines",
        "Use the correct type and amount of detergent",
        "Leave the door slightly open after use to prevent mold"
      ],
      brands: ["Bosch", "Siemens", "LG", "Samsung", "Whirlpool", "Electrolux", "Miele", "Panasonic"],
      faqs: [
        {
          question: "How much does washing machine repair cost?",
          answer: "Repair costs vary based on the issue and parts needed. We provide free diagnosis and transparent quotes before any work begins. Typical repairs range from 200-800 AED depending on the problem."
        },
        {
          question: "Do you offer same-day service?",
          answer: "Yes! We offer same-day service for washing machine repairs in Dubai and Abu Dhabi. Call us and we'll schedule a technician visit at your convenience."
        },
        {
          question: "What brands do you repair?",
          answer: "We repair all major washing machine brands including Bosch, Siemens, LG, Samsung, Whirlpool, Electrolux, Miele, and Panasonic."
        },
        {
          question: "Do you use genuine parts?",
          answer: "Absolutely! We only use genuine manufacturer parts or high-quality OEM equivalents to ensure your washing machine works perfectly and maintains its warranty."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide a 90-day warranty on all repairs and parts. If the same issue occurs within the warranty period, we'll fix it at no additional cost."
        },
        {
          question: "How long does a typical repair take?",
          answer: "Most washing machine repairs are completed within 1-2 hours. Complex issues may require ordering specific parts, but we'll keep you informed throughout the process."
        }
      ],
      whyChooseUs: [
        "15+ years of experience in appliance repair",
        "5000+ satisfied customers across UAE",
        "Certified and licensed technicians",
        "Same-day service available",
        "Genuine parts guarantee",
        "Transparent pricing"
      ]
    },
    "dryer": {
      heroTitle: "Professional Dryer Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Expert dryer repair for all brands. Fast, reliable service with certified technicians. Same-day repairs available in ${siteConfig.locations}.`,
      overview: `A malfunctioning dryer can be frustrating, especially in the humid climate of the UAE. Our expert technicians specialize in repairing all types of dryers - vented, condenser, and heat pump models. We serve ${siteConfig.locations} with prompt, professional service.`,
      benefits: [
        "Expert repair for all dryer types",
        "Same-day service available",
        "Certified technicians",
        "Genuine parts with warranty",
        "Transparent pricing",
        "24/7 emergency service"
      ],
      detailedIssues: [
        {
          issue: "Dryer Not Heating",
          description: "The dryer runs but clothes remain damp after a full cycle.",
          solution: "Usually caused by a faulty heating element, thermal fuse, or thermostat. We'll test and replace the defective component."
        },
        {
          issue: "Takes Too Long to Dry",
          description: "Clothes take much longer than usual to dry completely.",
          solution: "Could be blocked vent, faulty heating element, or worn-out drum seals. We'll clean vents and repair components."
        },
        {
          issue: "Not Turning On",
          description: "The dryer doesn't start when you press the power button.",
          solution: "May be a power supply issue, faulty door switch, or control board problem. We'll diagnose and fix."
        },
        {
          issue: "Overheating",
          description: "The dryer becomes extremely hot and may shut off automatically.",
          solution: "Blocked vent, faulty thermostat, or heating element issue. We'll identify and resolve the problem."
        }
      ],
      maintenanceTips: [
        "Clean the lint filter after every use",
        "Check and clean the vent hose regularly",
        "Don't overload the dryer",
        "Use appropriate heat settings",
        "Inspect the vent outside your home"
      ],
      brands: ["Bosch", "Siemens", "LG", "Samsung", "Whirlpool", "Electrolux"],
      faqs: [
        {
          question: "Why is my dryer not heating?",
          answer: "Common causes include a faulty heating element, thermal fuse, or thermostat. Our technicians will diagnose and replace the necessary parts."
        },
        {
          question: "How often should I clean my dryer vent?",
          answer: "We recommend cleaning the lint filter after every use and having the vent professionally cleaned annually to prevent fire hazards."
        }
      ],
      whyChooseUs: [
        "Expert dryer specialists",
        "Fast same-day service",
        "All brands supported",
        "Genuine parts"
      ]
    },
    "dishwasher": {
      heroTitle: "Expert Dishwasher Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Professional dishwasher repair for all brands. Same-day service, certified technicians, and genuine parts. Serving ${siteConfig.locations}.`,
      overview: `A broken dishwasher can disrupt your kitchen routine. Our certified technicians provide comprehensive dishwasher repair services across ${siteConfig.locations}. We repair all major brands and models.`,
      benefits: [
        "Expert dishwasher repair specialists",
        "Same-day service available",
        "All major brands supported",
        "Genuine parts guarantee",
        "90-day warranty",
        "24/7 emergency service"
      ],
      detailedIssues: [
        {
          issue: "Not Cleaning Properly",
          description: "Dishes come out dirty or with food residue after washing.",
          solution: "Blocked spray arms, faulty water pump, or detergent issues. We'll clean and repair components."
        },
        {
          issue: "Water Not Draining",
          description: "Water remains in the bottom of the dishwasher after cycle.",
          solution: "Clogged drain, faulty drain pump, or blocked filter. We'll clean and repair."
        },
        {
          issue: "Strange Odors",
          description: "Unpleasant smells coming from the dishwasher.",
          solution: "Food buildup, mold, or blocked filter. We'll deep clean and sanitize."
        },
        {
          issue: "Not Starting",
          description: "Dishwasher doesn't start when you press the start button.",
          solution: "Power supply, door latch, or control board issue. We'll diagnose and fix."
        }
      ],
      maintenanceTips: [
        "Clean the filter regularly",
        "Run empty cycles with vinegar monthly",
        "Check spray arms for blockages",
        "Use appropriate detergent",
        "Don't overload the dishwasher"
      ],
      brands: ["Bosch", "Siemens", "LG", "Samsung", "Miele", "Whirlpool"],
      faqs: [
        {
          question: "Why is my dishwasher not cleaning dishes properly?",
          answer: "Common causes include blocked spray arms, low water pressure, or incorrect detergent. Our technicians will diagnose and fix the issue."
        },
        {
          question: "How much does dishwasher repair cost?",
          answer: "Repair costs vary. We provide free diagnosis and transparent quotes. Typical repairs range from 250-900 AED."
        }
      ],
      whyChooseUs: [
        "Dishwasher repair specialists",
        "Fast service",
        "All brands",
        "Genuine parts"
      ]
    },
    "fridge": {
      heroTitle: "Professional Refrigerator Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Expert refrigerator and freezer repair. Same-day service, certified technicians. Serving ${siteConfig.locations} with 15+ years experience.`,
      overview: `A malfunctioning refrigerator can lead to food spoilage and significant losses. Our expert technicians provide comprehensive refrigerator repair services across ${siteConfig.locations}. We repair all types including side-by-side, French door, and top-freezer models.`,
      benefits: [
        "Expert refrigerator specialists",
        "Same-day service",
        "All refrigerator types",
        "Genuine parts",
        "90-day warranty",
        "24/7 emergency service"
      ],
      detailedIssues: [
        {
          issue: "Not Cooling",
          description: "Refrigerator or freezer section not maintaining proper temperature.",
          solution: "Faulty compressor, refrigerant leak, or thermostat issue. We'll diagnose and repair."
        },
        {
          issue: "Ice Maker Problems",
          description: "Ice maker not producing ice or producing too much ice.",
          solution: "Faulty water inlet valve, blocked water line, or ice maker mechanism issue. We'll fix it."
        },
        {
          issue: "Water Leakage",
          description: "Water pooling inside or around the refrigerator.",
          solution: "Blocked defrost drain, faulty water filter, or door seal issue. We'll identify and repair."
        },
        {
          issue: "Strange Noises",
          description: "Unusual sounds like buzzing, clicking, or humming.",
          solution: "Faulty compressor, evaporator fan, or condenser fan. We'll diagnose and replace components."
        }
      ],
      maintenanceTips: [
        "Clean condenser coils every 6 months",
        "Check door seals regularly",
        "Replace water filter as recommended",
        "Don't overfill the refrigerator",
        "Keep temperature settings optimal",
        "Defrost freezer regularly if not auto-defrost"
      ],
      brands: ["Bosch", "Siemens", "LG", "Samsung", "Whirlpool", "Electrolux", "Miele"],
      faqs: [
        {
          question: "Why is my refrigerator not cooling?",
          answer: "Common causes include faulty compressor, refrigerant leak, or thermostat problems. Our technicians will diagnose and repair."
        },
        {
          question: "How much does refrigerator repair cost?",
          answer: "Costs vary by issue. We provide free diagnosis. Typical repairs range from 300-1200 AED depending on the problem."
        }
      ],
      whyChooseUs: [
        "Refrigerator repair experts",
        "Fast service",
        "All brands",
        "Genuine parts"
      ]
    },
    "oven": {
      heroTitle: "Expert Oven Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Professional oven repair for all brands. Same-day service, certified technicians. Serving ${siteConfig.locations}.`,
      overview: `Whether you have a built-in or standalone oven, our certified technicians provide expert repair services across ${siteConfig.locations}. We repair gas and electric ovens from all major brands.`,
      benefits: [
        "Expert oven specialists",
        "Gas and electric ovens",
        "Same-day service",
        "Genuine parts",
        "90-day warranty",
        "24/7 service"
      ],
      detailedIssues: [
        {
          issue: "Not Heating",
          description: "Oven doesn't reach the set temperature or doesn't heat at all.",
          solution: "Faulty heating element, igniter, or thermostat. We'll test and replace components."
        },
        {
          issue: "Door Problems",
          description: "Oven door doesn't close properly or glass is damaged.",
          solution: "Faulty door seal, broken hinges, or damaged glass. We'll repair or replace."
        },
        {
          issue: "Timer Issues",
          description: "Timer doesn't work or displays incorrectly.",
          solution: "Faulty control board or timer mechanism. We'll diagnose and repair."
        },
        {
          issue: "Temperature Inconsistency",
          description: "Oven temperature doesn't match the setting.",
          solution: "Faulty thermostat or temperature sensor. We'll calibrate or replace."
        }
      ],
      maintenanceTips: [
        "Clean spills immediately",
        "Regular deep cleaning",
        "Check door seals",
        "Test temperature accuracy",
        "Inspect heating elements"
      ],
      brands: ["Bosch", "Siemens", "LG", "Samsung", "Miele", "Whirlpool"],
      faqs: [
        {
          question: "Why is my oven not heating?",
          answer: "Common causes include faulty heating element, igniter (for gas), or thermostat. Our technicians will diagnose and repair."
        },
        {
          question: "How much does oven repair cost?",
          answer: "Costs vary. We provide free diagnosis. Typical repairs range from 250-1000 AED."
        }
      ],
      whyChooseUs: [
        "Oven repair experts",
        "All oven types",
        "Fast service",
        "Genuine parts"
      ]
    },
    "cooktop": {
      heroTitle: "Professional Cooktop & Stove Repair in Dubai & Abu Dhabi",
      heroDescription: `Expert cooktop repair for gas and electric models. Same-day service, certified technicians. Serving ${siteConfig.locations}.`,
      overview: `Our certified technicians specialize in repairing gas and electric cooktops across ${siteConfig.locations}. We service all major brands and ensure your cooktop works safely and efficiently.`,
      benefits: [
        "Gas and electric cooktops",
        "Same-day service",
        "Safety certified",
        "Genuine parts",
        "90-day warranty"
      ],
      detailedIssues: [
        {
          issue: "Burners Not Working",
          description: "One or more burners don't light or heat properly.",
          solution: "Faulty igniter, blocked gas ports, or electrical issue. We'll diagnose and repair."
        },
        {
          issue: "Uneven Heating",
          description: "Cooktop heats unevenly or some areas don't heat.",
          solution: "Faulty heating element or burner. We'll test and replace components."
        },
        {
          issue: "Gas Smell",
          description: "Detecting gas smell when cooktop is on.",
          solution: "Gas leak or faulty connection. We'll inspect and repair immediately for safety."
        },
        {
          issue: "Temperature Issues",
          description: "Can't control temperature or it's inconsistent.",
          solution: "Faulty control knob or thermostat. We'll repair or replace."
        }
      ],
      maintenanceTips: [
        "Clean spills immediately",
        "Regular deep cleaning",
        "Check gas connections",
        "Inspect burners",
        "Test igniters"
      ],
      brands: ["Bosch", "Siemens", "Miele", "Electrolux"],
      faqs: [
        {
          question: "Why are my burners not working?",
          answer: "Common causes include faulty igniter, blocked gas ports, or electrical issues. Our technicians will diagnose and repair."
        }
      ],
      whyChooseUs: [
        "Cooktop specialists",
        "Safety certified",
        "Fast service",
        "All brands"
      ]
    },
    "tv": {
      heroTitle: "Professional TV Repair Services in Dubai & Abu Dhabi",
      heroDescription: `Expert Smart TV and LED TV repair. Same-day service, certified technicians. Serving ${siteConfig.locations}.`,
      overview: `Our certified technicians provide expert TV repair services for Smart TVs and LED TVs across ${siteConfig.locations}. We repair all major brands and models.`,
      benefits: [
        "Smart TV specialists",
        "LED TV repair",
        "Same-day service",
        "Genuine parts",
        "90-day warranty"
      ],
      detailedIssues: [
        {
          issue: "Black Screen",
          description: "TV powers on but screen remains black.",
          solution: "Faulty backlight, power supply, or panel issue. We'll diagnose and repair."
        },
        {
          issue: "No Sound",
          description: "Picture is fine but no audio output.",
          solution: "Faulty speakers, audio board, or settings. We'll test and repair."
        },
        {
          issue: "Remote Not Working",
          description: "Remote control doesn't respond.",
          solution: "Faulty remote or IR sensor. We'll test and replace if needed."
        },
        {
          issue: "Connectivity Issues",
          description: "WiFi, HDMI, or other connections not working.",
          solution: "Faulty ports or software issue. We'll diagnose and fix."
        }
      ],
      maintenanceTips: [
        "Keep TV clean",
        "Update software regularly",
        "Proper ventilation",
        "Use surge protector",
        "Check connections"
      ],
      brands: ["LG", "Samsung", "Sony", "Panasonic"],
      faqs: [
        {
          question: "Why is my TV screen black?",
          answer: "Common causes include faulty backlight, power supply, or panel. Our technicians will diagnose and repair."
        }
      ],
      whyChooseUs: [
        "TV repair experts",
        "All TV types",
        "Fast service",
        "Genuine parts"
      ]
    }
  };

  const content = applianceContent[serviceId] || {
    heroTitle: `${service.name} in ${siteConfig.locations}`,
    heroDescription: service.description,
    overview: `Professional ${service.name.toLowerCase()} services in ${siteConfig.locations}.`,
    benefits: ["Expert service", "Same-day available", "Certified technicians"],
    detailedIssues: service.commonIssues.map(issue => ({
      issue,
      description: `Common issue with ${service.name.toLowerCase()}.`,
      solution: "Our technicians will diagnose and repair this issue."
    })),
    maintenanceTips: ["Regular maintenance", "Professional service"],
    brands: ["All major brands"],
    faqs: [],
    whyChooseUs: ["Expert service", "Fast response"]
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 xl:pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-full border border-white/10 mb-4 sm:mb-6">
                <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">{service.name}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                {content.heroTitle}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-6 sm:mb-8">
                {content.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => makePhoneCall()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => openWhatsApp(`Hello! I need ${service.name} service. Please help.`)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-6 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 sm:mb-6">
                About {service.name}
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                {content.overview}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden mt-6 lg:mt-0 aspect-[4/3]"
            >
              <ImageWithFallback
                src={service.image}
                alt={`${service.name} repair service`}
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
              Why Choose Our {service.name} Service?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-white font-medium leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
              Common {service.name} Issues We Fix
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              Our expert technicians have experience fixing all types of {service.name.toLowerCase()} problems
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {content.detailedIssues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{item.issue}</h3>
                        <p className="text-sm sm:text-base text-slate-400 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-start gap-2">
                          <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
              Brands We Service
            </h2>
            <p className="text-base sm:text-lg text-slate-400 px-4">
              We repair {service.name.toLowerCase()} from all major brands
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {content.brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md text-center">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-white font-semibold">{brand}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
                Maintenance Tips for Your {service.name}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {content.maintenanceTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
                Why Choose Appliance Masters UAE?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Users, text: "5000+ Happy Customers" },
                { icon: Award, text: "15+ Years Experience" },
                { icon: Shield, text: "90-Day Warranty" },
                { icon: Zap, text: "Same-Day Service" },
                { icon: Star, text: "4.9/5 Rating" },
                { icon: Clock, text: "24/7 Emergency Service" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-white font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {content.faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>
              <div className="space-y-3 sm:space-y-4">
                {content.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">{faq.question}</h3>
                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 lg:p-12">
              <CardContent className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                  Need {service.name}? Get Expert Help Today!
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 leading-relaxed px-2">
                  Call us now for same-day service or WhatsApp us for instant assistance. Our certified technicians are ready to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => makePhoneCall()}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Call {siteConfig.phoneNumber}</span>
                  </button>
                  <button
                    onClick={() => openWhatsApp(`Hello! I need ${service.name} service. Please help.`)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span>WhatsApp Us</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

