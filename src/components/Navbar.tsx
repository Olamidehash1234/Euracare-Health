import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full z-40 bg-white border-b border-gray-200 top-[44px] lg:top-[52px]">
      <div className="px-[24px] lg:px-[80px] md:px-[40px]">
        <div className="flex justify-between h-[85px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/"><img
              src="/logo.svg"
              alt="Euracare Logo"
              className=""
            /></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-[30px]">
            <a href="#" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              About Euracare
            </a>
            <a href="#" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Our Services
            </a>
            <a href="#" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Find a Doctor
            </a>
            <a href="#" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Patient & Visitor Information
            </a>
            <a href="#" className="text-[#02070D] hover:text-[#0C2141] text-[15px]">
              Book Appointment
            </a>
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex">
            <button className="flex items-center border-[1px] border-[#02070D] px-5 py-[14px] px-[40px] rounded-[48px] hover:bg-gray-100 transition">
              <img
                src="/navbar/call.svg"
                alt="Call Icon"
                className="mr-2"
              />
              <span className="text-[16px] font-medium lg:leading-[27px]">Call us today</span>
            </button>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            About Euracare
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Our Services
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Find a Doctor
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Patient & Visitor Information
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Book Appointment
          </a>
          <button className="flex items-center border border-gray-400 px-5 py-2 rounded-full hover:bg-gray-100 transition">
            <img
              src="/call-icon-placeholder.png"
              alt="Call Icon"
              className="h-4 w-4 mr-2"
            />
            <span className="text-[15px]">Call us today</span>
          </button>
        </div>
      )}
    </nav>
  );
}
