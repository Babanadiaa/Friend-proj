import React from 'react';
import Fade from "react-awesome-reveal"
import Slide from "react-awesome-reveal"
import Bounce from "react-awesome-reveal"


export default function About() {
    const steps = [
        {
            number: 1,
            title: "Contact Me",
            desc: "Reach out via Instagram, Telegram, or Email. Let’s discuss your vision and how I can help bring it to life."
        },
        {
            number: 2,
            title: "The Vision",
            desc: "Share your project details, style, and goals. I’m open to one-offs, but love building ongoing creative partnerships."
        },
        {
            number: 3,
            title: "Editing",
            desc: "Once we’re aligned, I’ll get to work. Most projects are delivered within 24 hours to 5 days, depending on complexity."
        },
        {
            number: 4,
            title: "Delivery",
            desc: "You’ll receive your video in high quality, ready to post or share. I’ll also provide formatted versions for different platforms."
        }
    ];

    return (
        <section className=" mx-auto p-8 text-white bg-black" id='About'>
            <h2 className="text-3xl font-bold mb-10 text-center">About</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {steps.map(step => (
                    <Slide>
                        <li key={step.number} className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-start">
                            <span className="text-lg font-bold bg-[#005a86] text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">{step.number}</span>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-white/80">{step.desc}</p>
                        </li>
                    </Slide>
                ))}
            </ul>
        </section>
    );
}
