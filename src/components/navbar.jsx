import { faEdit, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="z-10 sticky top-0 w-full h-[80px] border-b border-grey bg-white flex items-center px-[5vw] py-4 border-grey-100 font-sans">
        <Link to="/" className="flex-none text-2xl font-bold text-black">
          E-cell
        </Link>


        <div className="hidden md:block md:relative md:inset-0 md:w-full">
          <div className="relative w-full md:w-96 md:mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full p-4 pr-12 bg-gray-200 border border-gray-300 focus:bg-white focus:border-black transition placeholder:text-gray-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>

        <button className="md:hidden ml-auto mr-3 text-2xl text-black focus:outline-none" aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Link to="/editor" className="gap-2 items-center whitespace-nowrap bg-gray-400 text-black rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex">
            <FontAwesomeIcon icon={faEdit} />
            <p>Threads</p>
          </Link>
          <Link className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80" to="/signin">
            Sign In
          </Link>
          <Link className="whitespace-nowrap bg-gray-400 text-black rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80" to="/signup">
            Sign Up
          </Link>
        </div>


        <button
          className="md:hidden text-3xl text-black focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>


      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="w-1/2 max-w-xs bg-white rounded-l-3xl shadow-lg p-6 pt-10 flex flex-col gap-6 font-sans h-full animate-slide-in-right">
            <div className="flex justify-between items-center mb-2">
              <Link to="/" className="text-2xl font-bold text-black" onClick={() => setMenuOpen(false)}>
                E-cell
              </Link>
              <button
                className="text-2xl text-black"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <Link
              to="/editor"
              className="flex items-center gap-2 whitespace-nowrap bg-gray-400 text-black rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faEdit} />
              Threads
            </Link>
            <Link
              to="/signin"
              className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="whitespace-nowrap bg-gray-400 text-black rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <Outlet />

      <style>
        {`
          @keyframes slide-in-right {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </>
  );
};

export default Navbar;