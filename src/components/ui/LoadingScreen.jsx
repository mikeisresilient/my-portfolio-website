import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-4xl font-extrabold tracking-wide text-white"
            >
              Michael
              <span className="text-blue-400">.</span>
            </motion.h1>

            {/* Loader */}
            <div className="flex gap-3">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-3 w-3 rounded-full bg-blue-500"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: item * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;