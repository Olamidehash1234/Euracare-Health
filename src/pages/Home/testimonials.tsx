import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  image: string;
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testimonials/testimonial1.jpg",
    quote: "Caring and Comprehensive Antenatal Care",
    author: "Halima Yusuf (Antenatal & Postnatal Care)",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonial2.jpg",
    quote: "Life–Changing Cardiology Support",
    author: "Mr. Chuka Nwokedi (Interventional Cardiology)",
  },
  {
    id: 3,
    image: "/images/testimonials/testimonial3.jpg",
    quote: "Exceptional Service and Professionalism",
    author: "Mrs. Lola Adebayo (General Medicine)",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What Our Patients <br /> Have To Say
        </h2>

        {/* Arrows */}
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-blue-800 transition">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#fefaf9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image with Overlay Button */}
            <div className="relative">
              <img
                src={t.image}
                alt={t.author}
                className="w-full h-56 object-cover"
              />
              <button className="absolute inset-0 m-auto w-36 py-2 rounded-full bg-blue-900 text-white font-medium flex items-center justify-center shadow-md hover:bg-blue-800 transition">
                ▶ Watch Video
              </button>
            </div>

            {/* Quote & Author */}
            <div className="p-5">
              <p className="text-lg font-semibold italic text-gray-900">
                “{t.quote}”
              </p>
              <p className="mt-3 text-sm text-gray-700">— {t.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
