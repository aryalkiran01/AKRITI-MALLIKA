import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
  index: number;
}

const TeamCard = ({
  name,
  role,
  description,
  image,
  email,
  linkedin,
  index,
}: TeamCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-primary">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-primary mb-1">
          {name}
        </h3>
        <p className="text-secondary font-semibold text-sm mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/10 text-primary rounded-full hover:bg-secondary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
          )}
          {email && (
            <motion.a
              href={`mailto:${email}`}
              className="p-2 bg-primary/10 text-primary rounded-full hover:bg-secondary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={18} />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
