import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import "./index.css";
import { ThemeProvider } from './components/theme-provider.tsx';
import Home from './pages/Home.tsx';
import Movies from './pages/Movies.tsx';
import WatchListPage from './pages/WatchList.tsx';
import { WatchListProvider } from './context/WatchListContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <WatchListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Navigate to="/movies/all" replace />} />
              <Route path="/movies/:category" element={<Movies />} />
              <Route path="/watchlist" element={<WatchListPage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </WatchListProvider>
    </ThemeProvider>
    
    
  </React.StrictMode>,
)
