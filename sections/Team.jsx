'use client';

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { TypingText, ServiceCard } from '../components';
import styles from '../styles';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";


const Team = () => {
  return (
    <>
      <section className={`${styles.paddings} relative z-5`}>
        <div className="gradient-02 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| Our team behind all the success we have" textStyles="text-center" />
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">Our expert team </span> {' '} is committed to your success, blending advanced technology with personalized support to make your digital journey exceptional. Let's turn your visionary ideas into reality.

          </motion.p>

          <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
          <div className='mt-10 flex lg:flex-row flex-col gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

        </motion.div>
      </section >
    </>
  );
};
export default Team;
