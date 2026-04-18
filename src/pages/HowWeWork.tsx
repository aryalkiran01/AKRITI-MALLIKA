import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import img from "../assets/howitwork1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const HowWeWork = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const timelineSteps = [
    {
      step: 1,
      title: "Consult",
      description:
        "We begin with a comprehensive consultation to understand your project requirements, site conditions, and objectives. Our expert team assesses challenges and proposes optimal solutions.",
      image: img,
    },
    {
      step: 2,
      title: "Contract",
      description:
        "Once we've agreed on the scope and vision, we finalize detailed contracts outlining timelines, costs, and quality standards. Transparency and clear communication ensure mutual understanding.",
      image: img2,
    },
    {
      step: 3,
      title: "Construction",
      description:
        "Our skilled teams execute the project with precision using modern equipment and proven methodologies. Regular inspections and quality checks ensure every phase meets our high standards.",
      image: img3,
    },
    {
      step: 4,
      title: "Commissioning",
      description:
        "Upon completion, we conduct thorough testing and final inspections. Handover includes documentation, training, and post-completion support for long-term success.",
      image: img4,
    },
  ];
  const packages = [
    {
      title: "Basic",
      features: [
        "Survey & Site Inspection",
        "Earthwork & Excavation",
        "Subgrade Preparation",
        "Basic Drainage",
        "Gravel Road Construction",
        "Compaction & Leveling",
      ],
    },
    {
      title: "Standard",
      features: [
        "Detailed Design & Planning",
        "Earthwork & Subgrade",
        "Base & Sub-base Layers",
        "Asphalt / Bitumen Surfacing",
        "Drainage System",
        "Road Marking",
        "Quality Testing",
      ],
    },
    {
      title: "Premium",
      features: [
        "Full Project Planning & Design",
        "Earthwork + Soil Stabilization",
        "Concrete / Asphalt Road",
        "Bridge / Culvert Construction",
        "Advanced Drainage System",
        "Street Lighting",
        "Safety & Signage",
        "Maintenance Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="How We Work"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "How We Work", path: "/how-we-work" },
        ]}
        backgroundImage="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589654.jpg?t=st=1744083045~exp=1744086645~hmac=b9e26dfb0b929eb13a5815a0d72c84b13e20dfcc78d18f16645b14c7ef7fdcab&w=996"
      />

      {/* Intro Section */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Construction Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-secondary/50 mx-auto mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Akriti SRP Rocket JV, we follow a structured and transparent
              process to deliver exceptional construction projects. Our approach
              ensures quality, efficiency, and client satisfaction at every
              step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline steps={timelineSteps} />

      {/* Infrastructure Packages Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Infrastructure Packages
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Choose the right package based on your project scale and
              requirements.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-8 border transition-all duration-300 bg-white shadow-sm hover:shadow-xl
          ${
            pkg.title === "Premium"
              ? "border-blue-600 shadow-lg scale-105"
              : "border-border"
          }`}
              >
                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-6 text-center ${
                    pkg.title === "Premium"
                      ? "text-blue-600"
                      : "text-foreground"
                  }`}
                >
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div className="h-[2px] bg-border mb-6" />

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-blue-600 mt-1">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 w-full py-3 rounded-lg font-semibold transition
            ${
              pkg.title === "Premium"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-muted hover:bg-muted/70"
            }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Floating Buttons */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-secondary text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed bottom-8 left-8 w-14 h-14 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default HowWeWork;
