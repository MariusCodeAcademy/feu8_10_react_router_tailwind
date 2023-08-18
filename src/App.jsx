import { useState } from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

export default function App() {
  const [activePage, setActivePage] = useState(2);

  return (
    <div>
      <div className="pb-4">
        <button
          onClick={() => setActivePage(1)}
          className="border hover:bg-slate-200 border-black rounded-sm px-3 py-1"
        >
          Home
        </button>
        <button
          onClick={() => setActivePage(2)}
          className="border hover:bg-slate-200 border-black rounded-sm px-3 py-1"
        >
          About
        </button>
      </div>
      {activePage === 1 && <HomePage />}
      {activePage === 2 && <AboutPage />}
    </div>
  );
}
