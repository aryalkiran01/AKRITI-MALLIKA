import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";

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
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      step: 2,
      title: "Contract",
      description:
        "Once we've agreed on the scope and vision, we finalize detailed contracts outlining timelines, costs, and quality standards. Transparency and clear communication ensure mutual understanding.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      step: 3,
      title: "Construction",
      description:
        "Our skilled teams execute the project with precision using modern equipment and proven methodologies. Regular inspections and quality checks ensure every phase meets our high standards.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
    {
      step: 4,
      title: "Commissioning",
      description:
        "Upon completion, we conduct thorough testing and final inspections. Handover includes documentation, training, and post-completion support for long-term success.",
      image:
        "https://images.unsplash.com/photo-1581092165854-40129fb383b3?w=800&h=600&fit=crop",
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
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop"
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
              ensures quality, efficiency, and client satisfaction at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline steps={timelineSteps} />

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
        className="fixed bottom-8 left-8 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default HowWeWork;
