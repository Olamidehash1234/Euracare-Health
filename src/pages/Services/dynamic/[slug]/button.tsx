export default function MedicalNavigation() {
  const navItems = [
    { id: '01', title: 'Overview', sectionId: 'overview' },
    { id: '02', title: 'Our Doctors', sectionId: 'doctors' },
    { id: '03', title: 'Conditions we treat', sectionId: 'conditions' },
    { id: '04', title: 'Tests and Diagnostics', sectionId: 'tests' },
    { id: '05', title: 'Treatments & Procedures', sectionId: 'procedures' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const offset = 200; // Adjust this value based on your header height
    if (section) {
      const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[90px] z-30 lg:top-[138px] w-full">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-[#0C2141] text-white">
        <div className="flex">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`flex-1 px-6 py-4 lg:py-[20px] text-center border-b-[1.5px] cursor-pointer transition-colors duration-200 hover:bg-slate-700 ${
                index !== navItems.length - 1 ? 'border-r-[2px] border-[#F8F8F880]' : ''
              }`}
            >
              <div className="text-[16px] lg:leading-[26px]">
                <span className="text-white">{item.id}</span>
                <span className="ml-2 text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Tablet Navigation */}
      <nav className="hidden md:block lg:hidden bg-[#0C2141] text-white">
        <div className="grid grid-cols-2 gap-px bg-slate-600">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className="bg-[#0C2141] px-4 py-4 text-center border-b-[1.5px] cursor-pointer transition-colors duration-200 hover:bg-slate-700"
            >
              <div className="text-sm font-medium">
                <span className="text-slate-300">{item.id}</span>
                <span className="ml-2 text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Scrollable with hidden scrollbar */}
      <nav className="md:hidden bg-[#0C2141] text-white overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`flex-shrink-0 px-6 py-4 text-center border-b-[1.5px] cursor-pointer transition-colors duration-200 hover:bg-slate-700 whitespace-nowrap ${
                index !== navItems.length - 1 ? 'border-r border-slate-600' : ''
              }`}
            >
              <div className="font-normal">
                <span className="text-[14px] text-slate-300">{item.id}</span>
                <span className="ml-2 text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}