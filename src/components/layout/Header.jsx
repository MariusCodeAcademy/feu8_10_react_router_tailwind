import { useState } from 'react';
export default function Header() {
  const [activePage, setActivePage] = useState(2);
  return (
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
  );
}
