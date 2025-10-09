import React, { useState, useEffect, } from 'react'
import { FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);





    return (
        <header className={`z-20 fixed w-full p-3 px-10 flex justify-between items-center transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/1 shadow-lg' : 'bg-white/0 backdrop-blur-none shadow-none'}`}>
            <a href="#" className='text-2xl text-[#c1c7c6] w-full'>Andrew Machmur</a>

            <nav className=' relative w-full z-20 justify-end items-center hidden md:flex   '>
                <a href="#Portfolio" className='  text-[#9ea2a2]  fex text-l relative '><span className=' p-3 px-5 after:content-[""] after:block after:w-0 after:h-px after:bg-[#323535] after:bottom-0 after:left-0 after:absolute after:transition-all after:duration-300 hover:after:w-full'>Portfolio</span></a>
                <a href="#About" className=' text-[#9ea2a2]   text-l relative '><span className=' p-3 px-5 after:content-[""] after:block after:w-0 after:h-px after:bg-[#323535] after:bottom-0 after:left-0 after:absolute after:transition-all after:duration-300 hover:after:w-full'>About</span></a>
                <a href="#Contact" className='  text-[#9ea2a2]   text-l relative '><span className=' p-3 px-5 after:content-[""] after:block after:w-0 after:h-px after:bg-[#323535] after:bottom-0 after:left-0 after:absolute after:transition-all after:duration-300 hover:after:w-full'>Contact</span></a>
            </nav>
            <a href="#" onClick={() => setMenuOpen(true)} className='md:hidden text-2xl text-[#c1c7c6]'><FaBars /></a>

            {menuOpen && (
                <div className="phone__menu absolute top-0 left-0 w-full h-screen bg-black/90 flex justify-center items-center
                            transition-transform duration-300 transform translate-y-0" >
                    <nav className=' flex flex-col  z-20 justify-end items-center'>
                        <a href="#Portfolio" className='  text-[#9ea2a2]  fex text-2xl pt-8 relative '>Portfolio</a>
                        <a href="#About" className=' text-[#9ea2a2]   text-2xl pt-8 relative '>About</a>
                        <a href="#Contact" className='  text-[#9ea2a2]   text-2xl pt-8 relative '>Contact</a>
                    </nav>
                    <button onClick={() => setMenuOpen(false)} className='absolute top-5 right-5 text-2xl text-[#c1c7c6]  z-20'><IoCloseOutline />
                    </button>
                </div>
            )}
        </header >
    )
}
