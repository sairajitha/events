import { Bell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">

      <div className="flex items-center justify-between px-6 py-3">

        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">📅</span>
          </div>

          <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
            Assistant Dashboard
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/calendar" className="text-gray-600 hover:text-purple-600 px-3 py-2">
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-gray-600 hover:text-purple-600 px-3 py-2">
                Events
              </Link>
            </li>
            <li>
              <Link to="/event/create" className="text-gray-600 hover:text-purple-600 px-3 py-2">
                Create Event
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Notification */}
          <div className="relative cursor-pointer hidden sm:block">
            <Bell className="text-gray-500 w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
          </div>

          {/* User */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">
                Sarah Johnson
              </p>
              <p className="text-xs text-gray-500">
                Executive Assistant
              </p>
            </div>

            <div className="bg-purple-100 text-purple-600 w-9 h-9 rounded-lg flex items-center justify-center font-semibold">
              SJ
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/calendar" onClick={() => setIsOpen(false)}>
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/event/create" onClick={() => setIsOpen(false)}>
                Create Event
              </Link>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
}