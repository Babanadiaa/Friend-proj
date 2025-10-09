import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import About from './About/About.jsx'
import Portfrolio from './Portfolio/Portfrolio.jsx'
import Contact from './Contact/Contact.jsx'

function App() {

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
