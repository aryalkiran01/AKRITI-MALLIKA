import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

interface TimelineStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

const Timeline = ({ steps }: TimelineProps) => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Construction Process
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <TimelineCard
              key={step.step}
              {...step}
              isLeft={idx % 2 === 0}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
