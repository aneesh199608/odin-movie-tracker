// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider.tsx'; 

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
      
    </>
  )
}

export default App
