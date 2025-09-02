import { useState, useRef, useEffect } from 'react';

interface SortByProps {
  onSort: (option: string) => void;
  rightPosition?: string;
}

export default function SortBy({ onSort, rightPosition = "right-0 lg:right-[-72%]" }: SortByProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions = [
    "Alphabetically (A to Z)",
    "Alphabetically (Z to A)",
  ];

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
        className="flex items-center  justify-center gap-2 lg:gap-[9px] py-[17px] border border-[#5D6B80] lg:border-[#010101] w-full rounded-full px-5 py-2 bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <img src="/download.svg" alt="" className="w-[20px] h-[20px] lg:w-auto lg:h-auto" />
        <span className="text-sm font-normal lg:tracking-[-0.54px] lg:leading-[27px] lg:text-[16px] ">Sort by</span>
      </button>

      {isOpen && (
        <div className={`absolute top-full left-[-60px] lg:left-0 lg:rounded-[48px] ${rightPosition} mt-[10px] lg:mt-2 px-4 py-3 lg:px-[30px] lg:py-[30px] bg-[#F8F8F8] border-[1px] border-[#0C2141] rounded-lg z-50`}>
          {sortOptions.map((option, index) => (
            <div key={option}>
              <button
                onClick={() => {
                  onSort(option);
                  setIsOpen(false);
                }}
                className="w-full text-left transition text-sm lg:text-[16px] leading-[20px]"
              >
                {option}
              </button>
              {index < sortOptions.length - 1 && (
                <div className="h-[1px] bg-[#0C21411A] my-[10px] lg:my-[20px]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
