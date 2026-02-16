import { useState, useEffect } from 'react';
import ServiceCard from '../../components/ServiceCard';
import { getServices } from '../../services/serviceService';
import type { ServiceResponse } from '../../types/api-responses';

const ServiceLines = () => {
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getServices();
        setServices(data);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to load services';
        setError(errorMsg);
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="relative w-full bg-[#0C2141] text-white">
        <div className="px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 justify-between">
            <div className="flex">
              <div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-[60px] lg:pt-[260px] lg:mb-[260px]">
                <div className="lg:max-w-[460px]">
                  <p className="mb-0 lg:mb-[20px] uppercase font-medium text-[14px] leading-[20px] text-white">
                    Our Services
                  </p>
                  <h2 className="text-[24px] sm:text-4xl lg:text-[40px] font-medium leading-[40px] lg:leading-[40px] lg:tracking-[-1.8px] tracking-tight text-white">
                    Excellence in Every Specialty
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pb-16 lg:pb-[80px] gap-[16px]">
              <div className="animate-pulse flex gap-4">
                <div className="bg-gray-400 rounded-lg w-64 h-96"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full bg-[#0C2141] text-white">
        <div className="px-4 lg:px-20 py-20">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#0C2141] text-white">
      <div className="px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 justify-between">
          {/* Left: Sticky text area */}
          <div className="flex">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-[60px] lg:pt-[260px] lg:mb-[260px]">
              <div className="lg:max-w-[460px]">
                <p className="mb-0 lg:mb-[20px] uppercase font-medium text-[14px] leading-[20px] text-white">
                  Our Services
                </p>
                <h2 className="text-[24px] sm:text-4xl lg:text-[40px] font-medium leading-[40px] lg:leading-[40px] lg:tracking-[-1.8px] tracking-tight text-white">
                  Excellence in Every Specialty
                </h2>
                <p className="mt-[20px] text-justify lg:mt-[40px] font-normal text-[14px] lg:leading-[22px] leading-[20px] text-white">
                  At Euracare, we offer a full spectrum of medical services
                  designed for individuals who expect nothing less than excellence.
                  From advanced diagnostics to minimally invasive procedures and
                  complex surgeries, every service is delivered by specialists with
                  global training and deep local insight. Whether you need preventive
                  care or a second opinion on a serious condition, our multidisciplinary
                  teams work collaboratively to deliver clear answers, rapid access,
                  and the highest level of medical precision.
                </p>
                <a href="/services">
                  <button className="mt-[40px] w-full lg:w-auto justify-center lg:mt-[80px] lg:text-[16px] inline-flex items-center gap-[8px] rounded-full border border-[#F8F8F8] px-5 py-3 lg:px-[96px] lg:py-[22px] text-sm font-medium text-white transition hover:bg-white/10">
                    <img src="/home/search2.svg" alt="" />
                    <span>
                      View all <span className="font-bold">Services</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Services Grid */}
          <div className="flex flex-col lg:flex-row pb-16 lg:pb-[80px] gap-[16px]">
            {/* First column: 5 services */}
            <div className="flex flex-col gap-[20px] lg:py-[220px] w-full lg:w-1/2">
              {services.slice(0, 5).map((service) => (
                <div key={service.id}>
                  <ServiceCard
                    id={service.id}
                    title={service.snippet?.service_name || 'Service'}
                    description={service.snippet?.service_description || ''}
                    image={service.snippet?.cover_image_url || ''}
                  />
                </div>
              ))}
            </div>
            {/* Second column: 6 services */}
            <div className="flex flex-col gap-[20px] lg:py-[220px] w-full lg:w-1/2">
              {services.slice(5, 11).map((service) => (
                <div key={service.id}>
                  <ServiceCard
                    id={service.id}
                    title={service.snippet?.service_name || 'Service'}
                    description={service.snippet?.service_description || ''}
                    image={service.snippet?.cover_image_url || ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLines;
