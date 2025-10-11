import { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import About from './About/About.jsx'
import Portfrolio from './Portfolio/Portfrolio.jsx'
import Contact from './Contact/Contact.jsx'

function App() {
  useEffect(() => {
    const windowWidth = window.innerWidth

    // Якщо телефон — не запускаємо Lenis
    if (windowWidth <= 768) return

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetEl = document.querySelector(targetId)
        if (targetEl) lenis.scrollTo(targetEl, { duration: 1.4 })
      })
    })

    return () => lenis.destroy()
  }, [])
  return (
    <>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Portfrolio></Portfrolio>
      <Contact></Contact>
    </>
  )
}

export default App
