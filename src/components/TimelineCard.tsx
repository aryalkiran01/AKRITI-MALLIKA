import { motion } from "framer-motion";

interface TimelineCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
  isLeft: boolean;
  index: number;
}

const TimelineCard = ({
  step,
  title,
  description,
  image,
  isLeft,
  index,
}: TimelineCardProps) => {
  return (
    <motion.div
      className={`flex items-center gap-8 mb-16 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } relative`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-secondary/20 hidden lg:block" />

      {/* Step Circle */}
      <motion.div
        className="relative flex-shrink-0 w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-primary font-display text-2xl font-bold shadow-lg z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {String(step).padStart(2, "0")}
      </motion.div>

      {/* Card */}
      <motion.div
        className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
        whileHover={{ y: -10 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <h3 className="font-display text-2xl font-bold text-primary mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineCard;
