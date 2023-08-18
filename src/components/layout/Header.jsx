import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="mb-4  ">
      <div className="container flex justify-between">
        <a href="" className="text-lg ">
          React<span className="font-bold">Router</span>
        </a>
        <nav>
          <Link
            to="/"
            className="border hover:bg-slate-200 border-black  px-3 py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border hover:bg-slate-200 border-black  px-3 py-1"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
