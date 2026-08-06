
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 border-t-2 border-accent rounded-full animate-slow-spin"></div>
        <p className="mt-4 text-lg font-light accent-gradient">ЛОФТ ДИЗАЙН</p>
      </motion.div>
    </div>
  );
};

export default Loading;
