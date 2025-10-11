import React from 'react'
import { FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

import Andrew from "../assets/andreyko2try.webp"

export default function Contact() {
    return (
        <footer className=" mx-auto bg-black pb-20   px-10 shadow-xl text-white flex flex-col overflow-hidden  " id='Contact'>
            <div className="max-w-5xl w-full mx-auto  flex flex-col relative">
                <ul className="flex flex-col md:flex-row max-w-5xl  w-full mx-auto mt-10 py-5  justify-center  gap-6   text-xs md:text-xl lg:text-2xl">
                    <li className="flex flex-1 justify-center items-center gap-4 shadow-lg shadow-white/10 p-3 rounded-lg bg-white/5 hover:bg-white/30 transition-all   ">
                        <FaInstagram className="text-xl text-white/60" />
                        <a href="https://instagram.com/zruhh.motions/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            Instagram
                        </a>
                    </li>
                    <li className="flex flex-1 justify-center items-center  gap-4 shadow-lg shadow-white/10 p-3 rounded-lg  bg-white/5 hover:bg-white/30 transition-all    ">
                        <FaTelegramPlane className="text-xl text-white/60" />
                        <a href="https://t.me/ZRUHH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            Telegram
                        </a>
                    </li>
                    <li className="flex flex-1 justify-center items-center gap-4 shadow-lg shadow-white/10 p-3 rounded-lg  bg-white/5 hover:bg-white/30 transition-all   ">
                        <FaEnvelope className="text-xl text-white/60" />
                        <a href="mailto:mdesignbymamchur@gmail.com" className="hover:text-blue-400 transition">
                            @email
                        </a>
                    </li>
                </ul>
                <div className=" footer_contact flex flex-col-reverse  mx-auto bg-white relative rounded-3xl overflow-hidden p-5  pb-0 z-1  md:flex-row gap-5 text-center md:gap-20 justify-center items-center 
                ">
                    <div className="">
                        <img src={Andrew} alt="Andrew" loading='lazy' className='w-200' />
                    </div>
                    <h3 className='text-[#2FA3DD] text-3xl md:text-4xl lg:text-6xl content-center '>Just write me and we will do it!</h3>

                </div>
            </div>

        </footer>
    )
}
