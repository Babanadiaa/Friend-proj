import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Andrew from "../assets/andreyko2try.webp";

export default function HeroSection() {
    // 🔹 Створюємо ref — "вказівник" на DOM-елемент секції
    const ref = useRef(null);

    // 🔹 Відстежуємо прогрес скролу (від 0 до 1) у межах цього елемента
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // коли секція входить у видиму область і виходить
    });

    // 🔹 Згладжуємо рух (щоб не було "ривків")
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    // 🔹 Створюємо плавні трансформації залежно від скролу
    const scale = useTransform(smoothScroll, [0, 1], [1.5, 2]);
    const y = useTransform(smoothScroll, [0, 1], [0, -100]);

    return (
        <main
            ref={ref}
            className="px-10 min-h-[120vh] overflow-hidden flex flex-col relative justify-between bg-white"
        >
            {/* Текстовий блок */}
            <section className="flex flex-col md:flex-row md:justify-between pt-20 md:pt-80 w-full">
                <h1 className="z-10 text-black text-2xl md:max-w-[40%] md:text-4xl leading-tight">
                    Hello, I’m <span className="font-semibold">Andrew Mamchur</span>, Motion Designer & Video Editor.
                    I turn your ideas into reality with motion graphics.
                </h1>

                <div className="flex flex-col md:max-w-[30%] mt-10 md:mt-0">
                    <p className="z-10 text-xs md:text-lg  text-black leading-relaxed">
                        I’m a motion designer and video editor combining creativity with
                        technical skills to create dynamic and engaging content. Every
                        project feels alive and unique — with attention to detail and
                        a search for new, eye-catching styles.
                    </p>

                    <a
                        href="#"
                        className="rounded-3xl bg-black mb-20 text-white p-3 px-6 shadow-lg z-10 w-fit mt-6 hover:bg-gray-900 transition"
                    >
                        email me
                    </a>
                </div>
            </section>

            {/* Фото */}
            <div className="md:absolute md:left-1/2 bottom-0 md:-translate-x-1/2 flex relative justify-center">
                <motion.img
                    src={Andrew}
                    alt="Andrew Mamchur"
                    style={{ scale, y }}
                    className="relative h-[60vh] object-cover will-change-transform"
                />
            </div>
        </main>
    );
}
