export default function MedicalNavigation() {
  const navItems = [
    { id: '01', title: 'Overview' },
    { id: '02', title: 'Our Doctors' },
    { id: '03', title: 'Conditions and Procedures' },
    { id: '04', title: 'Tests and Diagnostics' }
  ];

  return (
    <div className="sticky top-0 lg:top-[138px] w-full">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-[#0C2141] text-white">
        <div className="flex">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-1 px-6 py-4 lg:py-[22px] text-center border-b-[1.5px] cursor-pointer transition-colors duration-200 hover:bg-slate-700 ${
                index !== navItems.length - 1 ? 'border-r-[2px] border-[#F8F8F880]' : ''
              }`}
            >
              <div className="text-[18px] lg:leading-[26px]">
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
              className="bg-[#0C2141] px-4 py-4 text-center cursor-pointer transition-colors duration-200 hover:bg-slate-700"
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
              className={`flex-shrink-0 px-6 py-4 text-center cursor-pointer transition-colors duration-200 hover:bg-slate-700 whitespace-nowrap ${
                index !== navItems.length - 1 ? 'border-r border-slate-600' : ''
              }`}
            >
              <div className="text-sm font-medium">
                <span className="text-slate-300">{item.id}</span>
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