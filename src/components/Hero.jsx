import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto pt-[240px]">
      <div className="flex flex-wrap justify-center 2xl:mx-[230px] xl:mx-[100px]">
        <div className="flex-[50%]">
          <div
            className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-10`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full orange-background" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <b>Devyn</b>.
              </h1>
              <p className={`${styles.heroSubText} mt-2`}>
                I am an aspiring software developer{" "}
                <br className="sm:block hidden" />
                from Singapore.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[50%] xl:max-w-[50%]">
          <ComputersCanvas/>
        </div>
        
      </div>
      {/* Hero section */}
      {/* <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <b>Devyn</b>.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an aspiring software developer <br className="sm:block hidden" />
            from Singapore.
          </p>
        </div>
      </div> */}

      

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="block h-[64px]">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
