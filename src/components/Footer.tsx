import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const EuracareFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Header Section */}
      <div className="px-4 sm lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          {/* Logo */}
          <img src="/logo-ft.svg" alt="Euracare Logo" />

          {/* Contact Info */}
          <div>
            <p className="text-[#010101] lg:leading-[32px] tracking-[-0.6px] text-[16px] mb-1">Enquiries & Appointments: <span className="font-bold hover:underline underline-offset-[4px]"><a href="tel:+234 700 3872 2273">+234 700 3872 2273</a></span></p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[32px] mb-16">
          <button className="flex items-center justify-center gap-[8px] py-[22px] lg:text-[16px] lg:leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/phone.svg" alt="" />
            Book Appointment
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[22px] lg:text-[16px] lg:leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/career.svg" alt="" />
            Careers at Euracare
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[22px] lg:text-[16px] lg:leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/find.svg" alt="" />
            Find a doctor
          </button>
          <button className="flex items-center justify-center gap-[8px] py-[22px] lg:text-[16px] lg:leading-[27px] lg:tracking-[-0.54px] border border-[#010101] rounded-full text-[#010101] hover:bg-gray-50 transition-colors">
            <img src="/footer/insurance.svg" alt="" />
            Insurance & Payment Info
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Euracare */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
              ABOUT EURACARE
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Who we are</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Our Vision & mission</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Our Mission Statement</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Accreditations & Awards</a></li>
            </ul>
          </div>

          {/* Service Lines */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
              SERVICE LINES
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cancer care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cardiac care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Neurosciences</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Gynaecology & Obstetrics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Orthopaedics</a></li>
            </ul>
          </div>

          {/* Media */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">
              MEDIA
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs and articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">News & Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Patient stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-1">293 Younis Bashorun Street cnr</p>
              <p className="text-gray-600 text-sm mb-1">Jide Oki Street, Victoria Island</p>
              <p className="text-gray-600 text-sm mb-3">Lagos, Nigeria</p>

              <div className="space-y-2">
                <a href="mailto:info@euracare.com.ng" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@euracare.com.ng</span>
                </a>
                <a href="tel:+2347003872273" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+234 700 3872 2273</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="w-4 h-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="w-4 h-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 mb-4 lg:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Cookie settings</a>
              <span className="text-gray-400">·</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</a>
              <span className="text-gray-400">·</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Legal</a>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>Euracare Nigeria. Registration number: XXXXXXXXXXX. © Copyright 2025 - Euracare Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EuracareFooter;