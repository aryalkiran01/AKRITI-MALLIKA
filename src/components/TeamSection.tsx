import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Experts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our experienced professionals ensure every project is delivered with
            precision and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <TeamCard key={idx} {...member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
