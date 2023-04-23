import { motion } from "framer-motion";

const Fade = ({ duration = 0.3, children }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;

// In this component, we define two variants for the animation: visible and hidden.
// The visible variant sets the opacity to 1, and the hidden variant sets the opacity to 0.
// We then use the motion.div element to wrap the children prop, and pass in the variants and
// transition props to configure the animation.
