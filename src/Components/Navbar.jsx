import { useState, useRef, useEffect } from 'react';
import { all, nav } from '../assets/all';
import { Link, NavLink } from 'react-router-dom';
import Button1 from '../Features/Button1';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="h-[80px] rounded-t-4xl relative font-medium px-1 md:px-5 lg:px-10 flex items-center justify-between z-30 bg-[#1233c1] text-white transition-all">
      {/* Logo */}
      <Link to="/">
        <img src={all.logo} alt="Logo" className="h-[40px] mr-10" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-[1rem] items-center">
        <Link to="/connect">
          <li className="hover:text-white/70 transition">Connected Workforce</li>
        </Link>

        {nav.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex items-center gap-1"
              aria-expanded={activeDropdown === item.name}
              aria-controls={`${item.name}-dropdown`}
            >
              <span>{item.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Content */}
            {activeDropdown === item.name && (
              <div
                ref={dropdownRef}
                className="absolute bg-white text-black rounded-md shadow-md p-4 mt-10 left-0 z-40 w-max"
              >
                {item.name === 'solutions' && (
                  <div className="grid grid-cols-3 gap-4">
                    {/* Plan */}
                    <div className="flex flex-col gap-2">
                      <img src={all.icon_plan} className="w-10" alt="Plan Icon" />
                      <NavLink to="/plan" className="font-bold text-amber-500 hover:text-[#1233c1]">Plan</NavLink>
                      <NavLink to="/forecasting">Forecasting</NavLink>
                      <NavLink to="/labor-model">Labor Model</NavLink>
                      <NavLink to="/staff-planning">Staff Planning</NavLink>
                      <NavLink to="/budgeting">Budgeting</NavLink>
                      <NavLink to="/demand-planning">Demand Planning</NavLink>
                      <NavLink to="/fresh-production">Fresh Production</NavLink>
                    </div>

                    {/* Schedule */}
                    <div className="flex flex-col gap-2">
                      <img src={all.icon_schedule} className="w-10" alt="Schedule Icon" />
                      <NavLink to="/schedule" className="font-bold text-[#b913bc] hover:text-[#1233c1]">Schedule</NavLink>
                      <NavLink to="/employee-scheduling">Employee Scheduling</NavLink>
                      <NavLink to="/time-attendance">Time and Attendance</NavLink>
                    </div>

                    {/* Execute */}
                    <div className="flex flex-col gap-2">
                      <img src={all.icon_execute} className="w-10" alt="Execute Icon" />
                      <NavLink to="/execute" className="font-bold text-[#008d97] hover:text-[#1233c1]">Execute</NavLink>
                      <NavLink to="/store-execution">Store Execution</NavLink>
                      <NavLink to="/food-safety">Food Safety</NavLink>
                    </div>
                  </div>
                )}

                {item.name === 'technology' && (
                  <div className="flex flex-col gap-2">
                    <NavLink to="/technology">Our Technology</NavLink>
                    <NavLink to="/open-architecture">Open Architecture</NavLink>
                  </div>
                )}

                {item.name === 'about' && (
                  <div className="grid grid-cols-1 gap-2">
                    <NavLink to="/our-story">Our Story</NavLink>
                    <NavLink to="/customers">Customers</NavLink>
                    <NavLink to="/leadership">Leadership</NavLink>
                    <NavLink to="/board">Board</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/alliances">Alliances</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                )}

                {item.name === 'resources' && (
                  <div className="grid grid-cols-1 gap-2">
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/case-studies">Case Studies</NavLink>
                    <NavLink to="/brochures">Brochures</NavLink>
                    <NavLink to="/whitepapers">Whitepapers</NavLink>
                    <NavLink to="/webinars">Webinars</NavLink>
                    <NavLink to="/videos">Videos</NavLink>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <Button1 />

      {/* Mobile Menu Toggle */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 30 30">
          <path d="M3 7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2zM3 14a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2zM3 21a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#1233c1] p-6 lg:hidden z-20">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <Link to="/connect">
          <li className="hover:text-white/70 transition">Connected Workforce</li>
        </Link>
            <li><NavLink to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</NavLink></li>
            <li><NavLink to="/technology" onClick={() => setMenuOpen(false)}>Technology</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/resources" onClick={() => setMenuOpen(false)}>Resources</NavLink></li>
          </ul>
          <Link to="/demo"><button className=" lg:inline bg-white text-[#1233c1] text-sm hover:opacity-90 active:scale-95 transition-all w-40 md:h-11 h-12 mx-5 my-4 rounded-md font-bold">
          Request a Demo
        </button>
    </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
