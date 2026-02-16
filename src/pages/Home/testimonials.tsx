import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedTestimonials } from '../../services/testimonialService';
import type { TestimonialResponse } from '../../types/api-responses';
import VideoModal from '../../components/VideoModal';
import { TestimonialCarouselSkeleton } from '../../components/Skeletons/TestimonialCardSkeleton';

const PatientTestimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialResponse[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFeaturedTestimonials(6);
      setTestimonials(data);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to load testimonials';
      setError(errorMsg);
      // console.error('Error fetching testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleSlides = () => {
    const slides: TestimonialResponse[] = [];
    const visibleCount = Math.min(3, testimonials.length);
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % testimonials.length;
      slides.push(testimonials[index]);
    }
    return slides;
  };

  if (loading) {
    return (
      <div className="bg-white pb-[60px] lg:pb-[80px] lg:pt-0 px-4 lg:px-20 py-20">
        <div className="mb-[30px] lg:mb-[40px]">
          <h2 className="text-[24px] lg:text-[40px] lg:tracking-[-0.8px] tracking-[-0.5px] font-medium text-[#02070D] leading-[40px]">
            Hear from our Patients
          </h2>
          <p className='mt-[10px] max-w-[700px] text-[14px] lg:text-[16px] lg:leading-[24px]'>We're proud to be the first choice for individuals and families who demand the highest standard of care. These are their words, their journeys, and their reasons for choosing Euracare.</p>
        </div>
        <TestimonialCarouselSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white pb-[60px] lg:pb-[80px] px-4 lg:px-20 py-20">
        <div className="p-4 bg-white border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
          <button
            onClick={fetchTestimonials}
            className="mt-3 px-4 py-2 bg-[#0C2141] text-white text-sm rounded hover:bg-[#0E2540] transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-white pb-[60px] lg:pb-[80px] lg:pt-0 px-4 lg:px-20">
      <div className="">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-[30px] lg:mb-[40px]">
          <div>
            <h2 className="text-[24px] lg:text-[40px] lg:tracking-[-0.8px] tracking-[-0.5px] font-medium text-[#02070D] leading-[40px]">
              Hear from our Patients
            </h2>

            <p className='mt-[10px] max-w-[700px] text-[14px] lg:text-[16px] lg:leading-[24px]'>We’re proud to be the first choice for individuals and families who demand the highest standard of care. These are their words, their journeys, and their reasons for choosing Euracare.</p>
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
              <div className="relative w-full" style={{ height: 270 }}>
                {testimonial.video_url ? (
                  <>
                    <div className="absolute inset-0 bg-[#01010199] z-10"></div>
                    <img 
                      src={testimonial.thumbnail_url || testimonial.video_url} 
                      alt={testimonial.patient_name} 
                      className="w-full h-full object-cover"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[#01010199] z-10"></div>
                    <img 
                      src={testimonial.thumbnail_url || '/placeholder.jpg'} 
                      alt={testimonial.patient_name} 
                      className="w-full h-full object-cover"
                    />
                  </>
                )}
                {/* Watch Video Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    className="flex items-center gap-[6px] px-[20px] py-[10px] rounded-full bg-[#0C2141] text-white text-[14px] leading-[20px] font-medium shadow-lg hover:bg-[#0B1F37] transition disabled:opacity-50"
                    aria-label="Watch Video"
                    onClick={() => {
                      if (testimonial.video_url) {
                        setModalVideo(testimonial.video_url);
                        setModalOpen(true);
                      }
                    }}
                    disabled={!testimonial.video_url}
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
                  &ldquo;{testimonial.title}&rdquo;
                </h3>
                <p className="font-semibold text-[14px] leading-[24px] italic text-[#000000] tracking-[-0.3px]">
                  — {testimonial.patient_name} ({testimonial.service})
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
      {/* Video Modal */}
      <VideoModal
        open={modalOpen}
        videoUrl={modalVideo}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PatientTestimonials;