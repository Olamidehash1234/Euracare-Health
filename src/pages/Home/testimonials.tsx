import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PatientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 2,
      quote: "Caring and Comprehensive Antenatal Care",
      author: "Halima Yusuf",
      department: "Antenatal & Postnatal Care",
      image: "/api/placeholder/400/300",
      video: "/api/placeholder/400/300"
    },
    {
      id: 2,
      quote: "Life-Changing Cardiology Support",
      author: "Mr. Chuka Nwokedi",
      department: "Interventional Cardiology",
      image: "/api/placeholder/400/300"
    },
    {
      id: 1,
      quote: "Exceptional Service and Professionalism",
      author: "Mrs. Lola Adebayo",
      department: "General Medicine",
      image: "/api/placeholder/400/300"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      slides.push(testimonials[index]);
    }
    return slides;
  };

  return (
    <div className="bg-white pb-[60px] lg:pb-[80px] lg:pt-0 px-4 lg:px-20">
      <div className="">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-[30px] lg:mb-[40px]">
          <div>
            <h2 className="text-[24px] lg:text-[40px] lg:tracking-[-0.8px] tracking-[-0.5px] font-medium text-[#02070D] leading-[40px]">
              What Our Patients <br className='hidden lg:block' />
              Have To Say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className=" hidden lg:flex space-x-[10px]">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid - Modified for mobile */}
        <div className="block lg:grid lg:grid-cols-3 lg:gap-[40px]">
          {getVisibleSlides().map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${currentSlide}-${index}`} 
              className={`
                flex flex-col rounded-2xl overflow-hidden
                ${index === 0 ? 'block' : 'hidden'} 
                lg:block 
                ${index > 0 ? 'lg:mt-0 mt-6' : ''}
              `}
            >
              {/* Video Section */}
              <div className="relative w-full" style={{ height: 240 }}>
                <video
                  className="w-full h-full object-cover"
                  src={testimonial.video || ""}
                  poster={testimonial.image}
                  controls={false}
                  muted
                  loop
                  autoPlay
                  style={{ background: "#eee" }}
                />
                {/* Watch Video Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="flex items-center gap-[6px] px-[20px] py-[10px] rounded-full bg-[#0C2141] text-white text-[14px] leading-[20px] font-medium shadow-lg hover:bg-[#0B1F37] transition"
                    aria-label="Watch Video"
                  >
                    <img src="/video-circle.svg" alt="" />
                    <span className="text-base font-semibold">Watch Video</span>
                  </button>
                </div>
              </div>

              {/* Quote & Author Section */}
              <div
                className="flex flex-col justify-between h-[142px] lg:h-[162px] h-full lg:p-[30px] p-[20px]"
                style={{ background: "#FEF8F5"}}
              >
                <h3 className="text-[20px] lg:text-[26px] tracking-[-0.5px] lg:tracking-[-1.56px] font-medium lg:leading-[34px] text-gray-900 mb-[10px] leading-[34px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>
                <p className="font-semibold text-[14px] leading-[24px] italic text-[#000000] tracking-[-0.3px]">
                  — {testimonial.author} ({testimonial.department})
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Modified position and styling */}
        <div className="flex lg:hidden space-x-[10px] mt-[30px]">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#0C2141] hover:bg-[#0B1F37] transition-colors duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;