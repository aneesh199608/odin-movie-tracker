import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.tsx';
import { Button } from './components/ui/button.tsx';

function App() {

  return (
    <>
      <div className='hidden md:block'>
      <Navbar />
      <main>
        <Outlet />

      </main>
      </div> 

      {/* Block everything except this on mobile */}
      <div className="flex flex-col gap-4 block md:hidden min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-blue-100 border border-blue-200 rounded-xl px-4 py-3 mx-4 text-blue-900 text-base font-semibold shadow text-center">
          This app is best viewed on a desktop or web browser.
          Mobile version coming soon!
        </div>
        <Button variant="outline" className="cursor-pointer">View Project on Github</Button>
      </div>
      
    </>
  )
}

export default App
