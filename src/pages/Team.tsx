import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import md1 from "../assets/md1.jpeg";
import md2 from "../assets/md2.jpeg";
import er from "../assets/er.jpeg";
import ceo from "../assets/ceo.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dipak Aryal",
      role: "CEO",
      description:
        "Visionary CEO leading innovative construction projects with a focus on quality, sustainability, and timely delivery.",
      image: ceo,
      email: "dipakaryal7000@gmail.com",
      linkedin: "#",
    },
    {
      name: "Manish Aryal",
      role: "Managing Director",
      description:
        "Strategic Managing Director driving project execution, operational excellence, and sustainable business growth.",
      image: md1,
      email: "aryalmanish56@gmail.com",
      linkedin: "#",
    },
    {
      name: "Upendra Aryal",
      role: "Managing Director",
      description:
        "Experienced Managing Director overseeing large-scale construction projects with a focus on efficiency, quality, and client satisfaction.",
      image: md2,
      email: "upendraaryal01@akriti.com",
      linkedin: "#",
    },
    {
      name: "Er. Prakash Thapa",
      role: "Civil Engineer",
      description:
        "Expert in civil infrastructure with 20+ years of experience in large-scale construction projects.",
      image: er,
      email: "prakash@akriti.com",
      linkedin: "#",
    },
    {
      name: "Maya Gurung",
      role: "Interior Designer",
      description:
        "Creative interior designer crafting beautiful and functional spaces with attention to detail.",
      image: "https://www.thefilmnepal.com/uploads/medias/Gaumaya-gurung.webp",
      email: "maya@akriti.com",
      linkedin: "#",
    },
    {
      name: "Ramesh Adhikari",
      role: "Project Manager",
      description:
        "Strategic project manager ensuring timely delivery and resource optimization across all initiatives.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7szbVRnnUlDy3l4Kuk3lNmXjougkXk6xWg&s",
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
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to work with our expert team?
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us to discuss your project and discover how we
              can bring your vision to life.
            </p>

            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition"
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
