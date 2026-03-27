import { motion } from "framer-motion";

const Title = () => {
  // Adjust this value for your "preset period"
  const START_DELAY = 5.2;

  return (
    <h1 className="flex items-center overflow-hidden tracking-tight uppercase text-[clamp(16px,1.2vw,40px)]">
      {/* Container for "A NEW" */}
      <div className="relative overflow-hidden">
        <motion.span
          initial={{ x: "105%" }} // Start completely to the right
          animate={{ x: 0 }} // Slide to its natural position
          transition={{
            duration: 0.8,
            delay: START_DELAY,
            ease: [0.16, 1, 0.3, 1], // Custom "out-expo" ease for smoothness
          }}
          className="inline-block"
        >
          A NEW
        </motion.span>
      </div>

      {/* The static anchor point */}
      <span className="mx-1">/</span>

      {/* Container for "DRAFT" */}
      <div className="relative overflow-hidden">
        <motion.span
          initial={{ x: "-105%" }} // Start completely to the left
          animate={{ x: 0 }} // Slide to its natural position
          transition={{
            duration: 0.8,
            delay: START_DELAY,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          DRAFT
        </motion.span>
      </div>
    </h1>
  );
};

export default Title;
