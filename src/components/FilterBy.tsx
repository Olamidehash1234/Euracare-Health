import { useState, useRef, useEffect } from 'react';
import { services } from '../data/services';

interface FilterByProps {
  onFilter: (option: string) => void;
}

export default function FilterBy({ onFilter }: FilterByProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get unique services for filter options
  const filterOptions = Array.from(
    new Set(services.map(service => service.title))
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 lg:gap-[9px] py-[17px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px]">Filter by</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-[0px] lg:left-[-0px] lg:rounded-[48px] right-[-65px] lg:right-[-72%] mt-[10px] lg:mt-2 px-4 py-3 lg:px-[30px] lg:py-[30px] bg-[#F8F8F8] border-[1px] border-[#0C2141] rounded-lg z-50">
          <div className="max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="space-y-[10px] lg:space-y-[20px]">
              {filterOptions.map((option, index) => (
                <div key={option}>
                  <button
                    onClick={() => {
                      onFilter(option);
                      setIsOpen(false);
                    }}
                    className="w-full text-left transition text-sm lg:text-[16px] leading-[20px]"
                  >
                    {option}
                  </button>
                  {index < filterOptions.length - 1 && (
                    <div className="h-[1px] bg-[#0C21411A] my-[10px] lg:my-[20px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
