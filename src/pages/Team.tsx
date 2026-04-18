import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  const teamMembers = [
    {
      name: "Er. Ram Bahadur",
      role: "Civil Engineer",
      description:
        "Expert in civil infrastructure with 20+ years of experience in large-scale construction projects.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      email: "ram@akriti.com",
      linkedin: "#",
    },
    {
      name: "Sita Sharma",
      role: "Architect",
      description:
        "Visionary architect specializing in sustainable design and innovative construction solutions.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      email: "sita@akriti.com",
      linkedin: "#",
    },
    {
      name: "Hari Karki",
      role: "Project Manager",
      description:
        "Strategic project manager ensuring timely delivery and resource optimization across all initiatives.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      email: "hari@akriti.com",
      linkedin: "#",
    },
    {
      name: "Anil Thapa",
      role: "Site Supervisor",
      description:
        "On-site excellence leader managing daily operations and ensuring quality control standards.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      email: "anil@akriti.com",
      linkedin: "#",
    },
    {
      name: "Maya Gurung",
      role: "Interior Designer",
      description:
        "Creative interior designer crafting beautiful and functional spaces with attention to detail.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      email: "maya@akriti.com",
      linkedin: "#",
    },
    {
      name: "Ramesh Adhikari",
      role: "Structural Engineer",
      description:
        "Structural engineering specialist ensuring safety and durability of all construction projects.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      email: "ramesh@akriti.com",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Team"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Team", path: "/team" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
      />

      {/* Team Section */}
      <TeamSection members={teamMembers} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Want to work with our expert team?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us to discuss your project and discover how we
              can bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
