import { useState } from 'react';

type FooterSection = 'about' | 'services' | 'media' | 'contact';

const EuracareFooter = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    services: false,
    media: false,
    contact: false
  });

  const toggleSection = (section: FooterSection) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-white border-t border-[#00000033]">
      {/* Header Section */}
      <div className="px-[16px] lg:px-20 py-[60px] lg:py-[80px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-[30px] lg:mb-[40px]">
          {/* Logo */}
          <img src="/logo-ft.svg" alt="Euracare Logo" className="h-[50px] w-[135px] lg:h-auto lg:w-auto mb-[10px] lg:mb-0"/>

          {/* Contact Info */}
          <div>
            <p className="text-[#010101] lg:leading-[32px] tracking-[-0.6px] text-[16px] mb-1">Enquiries & Appointments: <span className="font-bold hover:underline underline-offset-[4px]"><a href="tel:+234 700 3872 2273">+234 700 3872 2273</a></span></p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[32px] mb-[30px] lg:mb-[40px]">
          <button className="flex items-center justify-center gap-[8px] py-[12px] lg:py-[22px] lg:text-[16px] leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/phone.svg" alt="" />
            Book Appointment
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[12px] lg:py-[22px] lg:text-[16px] leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/career.svg" alt="" />
            Careers at Euracare
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[12px] lg:py-[22px] lg:text-[16px] leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/find.svg" alt="" />
            Find a doctor
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[12px] lg:py-[22px] lg:text-[16px] leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/insurance.svg" alt="" />
            Insurance & Payment Info
          </button>
        </div>

        <div className='w-full h-[1px] bg-[#626F82] mb-[20px] lg:mb-[64px]'></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[50px] mb-[20px] lg:mb-[40px]">
          {/* About Euracare */}
          <div>
            <h3 
              className="lg:text-[#02070D80] text-[16px] leading-[24px] lg:tracking-[1.28px] tracking-[-0.2px] font-medium uppercase lg:mb-[20px] flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('about')}
            >
              ABOUT EURACARE
              <span className="lg:hidden">
                {openSections.about ? <img src="/footer/dash.svg" alt="minus" /> : '+'}
              </span>
            </h3>
            <ul className={`space-y-[10px] lg:space-y-[16px] mt-[20px] lg:mt-0 ${!openSections.about ? 'hidden lg:block' : ''}`}>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Who we are</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Our Vision & mission</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Our Mission Statement</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Accreditations & Awards</a></li>
            </ul>
          </div>

          <div className=" block lg:hidden h-[1px] bg-[#01010199] mb-[0px]"></div>

          {/* Service Lines */}
          <div>
            <h3 
              className="lg:text-[#02070D80] text-[16px] leading-[24px] lg:tracking-[1.28px] tracking-[-0.2px] font-medium uppercase lg:mb-[20px] flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('services')}
            >
              SERVICE LINES
              <span className="lg:hidden">
                {openSections.services ? <img src="/footer/dash.svg" alt="" /> : '+'}
              </span>
            </h3>
            <ul className={`space-y-[10px] lg:space-y-[16px] mt-[20px] lg:mt-0 ${!openSections.services ? 'hidden lg:block' : ''}`}>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Cancer care</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Cardiac care</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Neurosciences</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Gynaecology & Obstetrics</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Orthopaedics</a></li>
            </ul>
          </div>

          <div className=" block lg:hidden h-[1px] bg-[#01010199] mb-[0px]"></div>

          {/* Media */}
          <div>
            <h3 
              className="lg:text-[#02070D80] text-[16px] leading-[24px] lg:tracking-[1.28px] tracking-[-0.2px] font-medium uppercase flex lg:mb-[20px] justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('media')}
            >
              MEDIA
              <span className="lg:hidden">
                {openSections.media ? <img src="/footer/dash.svg" alt="" /> : '+'}
              </span>
            </h3>
            <ul className={`space-y-[10px] lg:space-y-[16px] mt-[20px] lg:mt-0 ${!openSections.media ? 'hidden lg:block' : ''}`}>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Blogs and articles</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">News & Press</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Patient stories</a></li>
              <li><a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className=" block lg:hidden h-[1px] bg-[#01010199] mb-[0px]"></div>

          {/* Contact Info */}
          <div>
            <h3 
              className=" block lg:hidden lg:text-[#02070D80] text-[16px] leading-[24px] lg:tracking-[1.28px] tracking-[-0.2px] font-medium uppercase flex lg:mb-[20px] justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              CONTACT
              <span className="lg:hidden">
                {openSections.contact ? <img src="/footer/dash.svg" alt="" /> : '+'}
              </span>
            </h3>
            <div className={`${!openSections.contact ? 'hidden lg:block' : ''}`}>
              <div className="mb-[10px] mt-[20px] lg:mt-0">
                <p className="text-[#010101] mb-[10px] lg:mb-[16px] text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">293 Younis Bashorun Street cnr Jide Oki Street, Victoria Island Lagos, Nigeria</p>

                <div className="space-y-[10px] lg:space-y-[16px]">
                  <a href="mailto:info@euracare.com.ng" className="flex items-center text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">
                    <span>info@euracare.com.ng</span>
                  </a>
                  <a href="tel:+2347003872273" className="flex items-center text-[#010101] hover:text-[#0C2141] leading-[27px] text-[16px] lg:tracking-[-0.54px] transition-colors">
                    <span>+234 700 3872 2273</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-[5px]">
                <a href="#" className="">
                  <img src="/footer/facebook.svg" alt="" />
                </a>
                <a href="#" className="">
                  <img src="/footer/instagram.svg" alt="" />
                </a>
                <a href="#" className="">
                  <img src="/footer/linkedln.svg" alt="" />
                </a>
                <a href="#" className="">
                  <img src="/footer/linkedln.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#626F82] pt-6 lg:pt-[20px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 lg:space-x-[24px] mb-4 lg:mb-0">
              <a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[14px] lg:tracking-[-0.54px] transition-colors font-medium">Cookie settings</a>
              <span className="text-[#010101]">·</span>
              <a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[14px] lg:tracking-[-0.54px] transition-colors font-medium">Privacy Policy</a>
              <span className="text-[#010101]">·</span>
              <a href="#" className="text-[#010101] hover:text-[#0C2141] leading-[27px] text-[14px] lg:tracking-[-0.54px] transition-colors  font-medium">Legal</a>
            </div>

            {/* Copyright */}
            <div className="text-[#010101] text-[14px] lg:leading-[21px] font-medium lg:tracking-[-0.42px]">
              <p>Euracare Nigeria. Registration number: XXXXXXXXXXX.  © Copyright 2025 - Euracare Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EuracareFooter;