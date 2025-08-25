import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full z-40 bg-white border-b border-[#0101011A] top-[44px] lg:top-[56px]">
      <div className="px-[16px] lg:px-[80px] md:px-[40px] lg:border-none border-b border-[#0101011A]">
        <div className="flex justify-between lg:h-[85px] h-[58px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              {/* Desktop Logo */}
              <img
                src="/logo.svg"
                alt="Euracare Logo"
                className="hidden lg:block"
              />
              {/* Mobile Logo */}
              <img
                src="/logo-mobile.svg"
                alt="Euracare Mobile Logo"
                className="block lg:hidden"
              />
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
        <div className="md:flex lg:hidden px-4 py-[40px] space-y-[30px]">
          <a href="/about" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            About Euracare
          </a>
          <a href="/services" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Our Services
          </a>
          <a href="/doctors" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Find a Doctor
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Patient & Visitor Information
          </a>
          <a href="#" className="block text-[#02070D] hover:text-[#0C2141] text-[15px]">
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
