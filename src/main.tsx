import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import "./index.css";
import { ThemeProvider } from './components/theme-provider.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />

          </Route>
        </Routes>

          
      </BrowserRouter>
    </ThemeProvider>
    
    
  </React.StrictMode>,
)
