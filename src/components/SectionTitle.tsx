
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  className
}: SectionTitleProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-2xl mb-12", alignClasses[align], className)}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
            {subtitle}
          </span>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
          {title}
        </h2>
      </motion.div>
      
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-base md:text-lg">
            {description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SectionTitle;
