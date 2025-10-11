import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Andrew from "../assets/andreyko2try.webp";

export default function HeroSection() {
    const ref = useRef(null);

    // Відстежуємо скрол в межах секції
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Масштаб і вертикальне зміщення
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 2]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <main
            ref={ref}
            className='px-10 min-h-[120vh] overflow-hidden flex flex-col relative justify-between before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black before:-z-10'>
            <section className='flex-col md:justify-between pt-20 md:pt-80 w-full md:flex-row flex '>
                <h1 className='z-10 text-white md:text-black text-2xl md:max-w-[40%] md:text-4xl'>
                    Hello, I’m Andrew Mamchur, Motion Designer, Video Editor.
                    I will turn your ideas into reality with Motion Graphics.
                </h1>

                <div className='flex flex-col md:max-w-[30%]'>
                    <div className='z-10 text-xs md:text-lg text-white/40 md:text-black'>
                        I’m a motion designer and video editor. I combine creativity with
                        technical skills to create dynamic and engaging content. Every
                        project I work on feels alive and unique. I pay close attention to
                        the smallest details and always look for new, eye-catching styles.
                    </div>
                    <a
                        href='#'
                        className='rounded-2xl bg-black/50 text-white p-3 px-5 shadow-lg z-10 w-fit mt-5'
                    >
                        email me
                    </a>
                </div>
            </section>

            {/* Фото */}
            <div className='md:absolute md:left-1/2 bottom-0 md:-translate-x-1/2 flex relative  '>
                <motion.img
                    src={Andrew}
                    alt='Andrew Mamchur'
                    // loading="lazy"
                    style={{ scale, y }}
                    className='relative h-[60vh] object-cover transition-transform duration-700 '
                />
            </div>
        </main>
    );
}
