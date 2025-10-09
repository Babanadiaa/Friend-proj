import React from 'react'
import { FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

import Andrew from "../assets/1.png"

export default function Contact() {
    return (
        <section className=" mx-auto bg-black/90  px-10 shadow-xl text-white flex flex-col overflow-hidden  " id='Contact'>
            {/* <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">Contact</h2> */}
            <ul className="flex max-w-5xl w-full mx-auto  justify-center md:justify-between flex-wrap  gap-6  p-10 text-xs md:text-xl lg:text-2xl">
                <li className="flex items-center gap-4">
                    <FaInstagram className="text-xl text-white/60" />
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        Instagram
                    </a>
                </li>
                <li className="flex items-center gap-4">
                    <FaTelegramPlane className="text-xl text-white/60" />
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        Telegram
                    </a>
                </li>
                <li className="flex items-center gap-4">
                    <FaEnvelope className="text-xl text-white/60" />
                    <a href="mailto:your@email.com" className="hover:text-blue-400 transition">
                        your@email.com
                    </a>
                </li>
            </ul>
            <div className="flex mx-auto ">

                <div className="">
                    <img src={Andrew} alt="" className='w-[600px]' />
                </div>
                <h3 className='text-white/60 text-2xl md:text-4xl lg:text-6xl content-center'>Just write me and we will do it!</h3>

            </div>

        </section>
    )
}
