'use client';

import React, { useState } from "react";
import {Tilt} from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import styles from './ServiceCard.module.css';
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, imgUrl, job }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: { 
      rotateY: 0, 
      transition: { duration: 1 } 
    },
    back: { 
      rotateY: 180, 
      transition: { duration: 1 }
    }
    
  };

  // Variants for the flip animation
  const cardVariants = {
    front: { 
      rotateY: 0, 
      transition: { duration: 1 }
    },
    back: { 
      rotateY: 180, 
      transition: { duration: 1 } 
    }
  };

  // Variants for the back content to counteract the flip transformation
  const contentVariants = {
    front: { 
      rotateY: 0, 
      transition: { duration: 1 } 
    },
    back: { 
      rotateY: 360, 
      transition: { duration: 1 } 
    }
  };
  return (
    <Tilt className="card-container xs:w-[150px] w-full" options={{ max: 25, scale: 1 }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => setIsFlipped(!isFlipped)}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        style={{ position: "relative" }}
      >
        <AnimatePresence>
          {!isFlipped ? (
            <motion.div
              variants={cardVariants}
              initial="front"
              animate="front"
              exit="back"
              className="bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-evenly items-center flex-col"
            >
              <img src={imgUrl} alt={title} className="w-56 h-56 object-contain rounded-[20px]" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </motion.div>
          ) : (
            <motion.div
              variants={contentVariants}
              initial="back"
              animate="back"
              exit="front"
              className="bg-tertiary rounded-[20px] p-1 min-h-[260px] flex justify-center items-center flex-col"
            >
              <h3 className="w-56 h-56 text-white text-[20px] flex justify-center items-center font-bold text-center">{job}</h3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;