import { useState } from "react";
import navigation from "../data/navigation";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          SA
        </h1>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">

          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="hover:text-cyan-400 transition"
              >
                {item.title}
              </a>
            </li>
          ))}

        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>


      {/* Mobile Navigation */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6">

          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.title}
              </a>
            </li>
          ))}

        </ul>
      )}

    </nav>
  );
}

export default Navbar;