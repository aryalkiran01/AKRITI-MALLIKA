import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
  index?: number;
};
const TeamCard = ({
  name,
  role,
  description,
  image,
  email,
  linkedin,
  index = 0,
}: TeamCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Social icons on image (NEW) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 text-blue-600 rounded-full hover:bg-white transition"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={16} />
            </motion.a>
          )}
          {email && (
            <motion.a
              href={`mailto:${email}`}
              className="p-2 bg-white/90 text-blue-600 rounded-full hover:bg-white transition"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">
            {name}
          </h3>

          <p className="text-blue-600 font-medium text-sm mb-3">{role}</p>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom icons (optional fallback) */}
        <div className="mt-auto pt-5 flex gap-3 opacity-70 group-hover:opacity-100 transition">
          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
          )}
          {email && (
            <motion.a
              href={`mailto:${email}`}
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
