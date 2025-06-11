// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider.tsx'; 
import { Hero } from './components/Hero.tsx';

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
    </ThemeProvider>
      
    </>
  )
}

export default App
