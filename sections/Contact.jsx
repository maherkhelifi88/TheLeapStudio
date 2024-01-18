'use client';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import { EarthCanvas } from "./canvas";
import { slideIn, staggerContainer, fadeIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


    };

    return (
        <section className={`${styles.paddings} relative z-10`}>
           
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
                    >
                        <div className="feedback-gradient" />
                        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">Get in touch</p>
                        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">Contact.</h4>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='mt-12 flex flex-col gap-8'
                        >
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your web address?"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={7}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder='What you want to say?'
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button
                                type='submit'
                                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
                    >
                        <EarthCanvas />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
