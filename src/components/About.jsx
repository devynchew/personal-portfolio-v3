import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview<span className={styles.sectionFullStop}>.</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${styles.sectionDesc}`}
      >
        I'm a fresh graduate from Singapore Polytechnic with a passion for building web applications. 
        During my free time, I love naps, bubble tea, cats and sandbox MMORPG games.
        Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
