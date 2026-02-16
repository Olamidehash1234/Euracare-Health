import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="sticky w-full z-40 bg-white border-b border-[#0101011A] top-[37px] lg:top-[56px]">
      <div className="px-[16px] sm:px-[16px] lg:px-[60px] md:px-[40px] lg:border-none border-b border-[#0101011A]">
        <div className="flex justify-between lg:h-[85px] h-[58px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              {/* Desktop Logo */}
              <img src="/logo.svg" alt="Euracare Logo" className="hidden lg:block" />
              {/* Mobile Logo */}
              <img src="/logo-mobile.svg" alt="Euracare Mobile Logo" className="block lg:hidden" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-[30px]">
            <a href="/about" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              About Euracare
            </a>
            <a href="/services" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Our Services
            </a>
            <a href="/doctors" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Find a Doctor
            </a>

            {/* Patient & Visitor Dropdown */}
            <div className="relative group">
              <button className="text-[#02070D] hover:text-[#0C2141] text-[15px] flex items-center gap-1 py-2 group">
                Patient & Visitor Information
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-[-25px] right-[-60px] transform pt-[30px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className=" bg-[#F8F8F8] border-[1px] border-[#0C2141] py-[32px] px-[30px] rounded-[20px]">
                  <NavLink
                    to="/patient-information/what-to-expect"
                    className={({ isActive }) =>
                      `block text-[16px] leading-[20px] hover:text-[#0C2141] ${isActive ? "text-[#0C2141]" : "text-[#02070D]"
                      }`
                    }
                  >
                    What To Expect
                  </NavLink>
                  <div className="h-[1px] bg-[#0C21411A] lg:my-[20px]"></div>
                  <NavLink
                    to="/patient-information/international-patients"
                    className={({ isActive }) =>
                      `block text-[16px] leading-[20px] hover:text-[#0C2141] ${isActive ? "text-[#0C2141]" : "text-[#02070D]"
                      }`
                    }
                  >
                    International Patient
                  </NavLink>
                  <div className="h-[1px] bg-[#0C21411A] lg:my-[20px]"></div>
                  <NavLink
                    to="/home/news"
                    className={({ isActive }) =>
                      `block text-[16px] leading-[20px] hover:text-[#0C2141] ${isActive ? "text-[#0C2141]" : "text-[#02070D]"
                      }`
                    }
                  >
                    News & Updates
                  </NavLink>
                </div>
              </div>
            </div>

            <a href="/enquiry" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Book Appointment
            </a>
            <a href="/careers" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Careers
            </a>
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex">
            <a href="tel: +2349094444413">
              <button className="flex items-center border-[1px] border-[#02070D] px-5 py-[14px] px-[40px] rounded-[48px] hover:bg-gray-100 transition">
                <img src="/navbar/call.svg" alt="Call Icon" className="mr-2" />
                <span className="text-[16px] font-medium lg:leading-[27px]">Call us today</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#02070D] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:flex flex-col lg:hidden px-4 py-[40px] space-y-[30px]">
          <a href="/about" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            About Euracare
          </a>
          <a href="/services" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Our Services
          </a>
          <a href="/doctors" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Find a Doctor
          </a>

          {/* Mobile Dropdown Toggle */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex justify-between w-full text-[#02070D] hover:text-[#0C2141] text-[15px]"
            >
              Patient & Visitor Information
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="mt-[10px] pl-4 space-y-[20px]">
                <a href="/patient-information/what-to-expect" className="block text-[15px] text-[#02070D] hover:text-[#0C2141]">
                  What To Expect
                </a>
                <a href="/patient-information/international-patients" className="block text-[15px] text-[#02070D] hover:text-[#0C2141]">
                  International Patient
                </a>
                <a href="/home/news" className="block text-[15px] text-[#02070D] hover:text-[#0C2141]">
                  News & Updates
                </a>
              </div>
            )}
          </div>

          <a href="/enquiry" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Book Appointment
          </a>
          <div>
            <a href="/careers" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
