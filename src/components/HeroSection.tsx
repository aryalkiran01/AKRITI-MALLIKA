import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path: string }[];
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  breadcrumb,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <section
      className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-primary overflow-hidden py-16"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/40" />

      {/* Content */}
      <motion.div
        className="relative text-center px-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {breadcrumb && (
          <motion.div
            className="flex justify-center gap-2 mb-4 text-primary-foreground/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span>{item.label}</span>
                {idx < breadcrumb.length - 1 && <span>/</span>}
              </div>
            ))}
          </motion.div>
        )}

        <motion.h1
          className="font-display text-5xl md:text-7xl text-primary-foreground font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
