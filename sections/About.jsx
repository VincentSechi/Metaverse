'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";

import { fadeIn, staggerContainer } from "../utils/motion"



const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center mb-10"/>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-20px text-center text-secondary-white"
      >
        <motion.span
          variants={fadeIn("down", "tween", 0.6 ,1)}
          className="font-extrabold text-[32px] text-white"
        >Metaverse </motion.span>
        is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the

        <motion.span
          variants={fadeIn("down", "tween", 1 ,1)}
          className="font-extrabold text-[32px] text-white"
        > madness of the metaverse </motion.span>
          
        of today, using only 
        <motion.span
          variants={fadeIn("down", "tween", 1.4 ,1)}
          className="font-extrabold text-[32px] text-white"
        > VR </motion.span>
        devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's

        <motion.span
          variants={fadeIn("down", "tween", 1.8 ,1)}
          className="font-extrabold text-[32px] text-white"
        > explore </motion.span>
        the madness of the metaverse by scrolling down

      </motion.p>
      <motion.div
        variants={fadeIn("up","tween", 2, 1)}
        className="mt-5"
      >
        <img src="arrow-down.svg" alt="arrowDown" className="w-[18px] h-[28px] object-contain"/>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
