import ServiceCard from '../../components/ServiceCard';

const FIRST_COLUMN_SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675976/cardiac_xbxrno_j7rqz2.jpg',
    title: 'Interventional Cardiology',
    description:
      'Our expert cardiologists provide advanced heart care, from diagnostics to complex interventions. Using the latest technology and evidence-based treatments, we help you protect and restore your heart health with precision and compassion.',
    slug: 'interventional-cardiology',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676016/radio_b8xwuo_n4dfef.jpg',
    title: 'Interventional Radiology',
    description:
      'We provide cutting-edge, image-guided procedures that diagnose and treat conditions with less discomfort and faster recovery. From targeted therapies to vascular interventions, our Interventional Radiology specialists combine technology and expertise to deliver outstanding outcomes.',
    slug: 'interventional-radiology',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675977/child_hewemt_zv4wb3.jpg',
    title: 'Adult & Pediatric Cardiology',
    description:
      'From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.',
    slug: 'adult-pediatric-cardiology',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676031/weight_rafgq8_avky6h.png',
    title: 'Bariatric & Weight Loss Surgery',
    description:
      'Our Bariatric Surgery program supports patients on their weight-loss journey with tailored surgical and non-surgical options. We focus on long-term health improvements, helping reduce obesity-related risks and enhancing overall well-being.',
    slug: 'bariatric-weight-loss-surgery',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676030/surgery_ydhhsx_b3p5cw.jpg',
    title: 'General Surgery',
    description:
      'Our General Surgery team is skilled in a wide range of procedures, from hernia repairs to complex abdominal surgeries. We prioritize patient safety, careful planning, and post-operative care to promote fast recovery and optimal results.',
    slug: 'general-surgery',
  },
];

const SECOND_COLUMN_SERVICES = [
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675979/gas_ucqxld_wjau9m.jpg',
    title: 'Gastroenterology',
    description:
      'We provide expert care for digestive health, diagnosing and treating conditions of the stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced endoscopic techniques for accurate diagnosis and effective treatment.',
    slug: 'gastroenterology',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676020/spine_blqqwi_n3wdle.jpg',
    title: 'Orthopedic Surgery',
    description:
      "Whether it's a sports injury, joint pain, or complex surgery, our orthopedic specialists and surgeons deliver solutions to restore movement and quality of life. We focus on minimally invasive techniques to help patients regain mobility, reduce pain, and return to active lifestyles with personalized treatment plans.",
    slug: 'orthopedic-surgery',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676031/urology_m0nizb_b3ptkb.jpg',
    title: 'Urology',
    description:
      'We offer comprehensive care for urinary tract and reproductive health issues. From kidney stones to prostate conditions, our urologists use advanced diagnostics and tailored treatments for the best possible outcomes.',
    slug: 'urology',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764675981/geri_n2yrho_orogus.jpg',
    title: 'Family & Geriatric Medicine',
    description:
      'We provide ongoing, personalized care for every stage of life. Our physicians manage chronic conditions, preventive health, and complex needs of older adults with a focus on quality of life and independence.',
    slug: 'family-geriatric-medicine',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676003/medicine_ih4pev_saxbp3.jpg',
    title: 'General Medicine',
    description:
      'Our General Medicine department delivers expert diagnosis and management of a broad spectrum of health concerns. We coordinate care across specialties, ensuring patients receive timely, effective, and compassionate treatment.',
    slug: 'general-medicine',
  },
  {
    image: 'https://res.cloudinary.com/dnycq9llb/image/upload/v1764676017/radio2_dhh2ki_xrpali.jpg',
    title: 'Radiology',
    description:
      'With advanced imaging technology, our Radiology department offers precise diagnostic services including MRI, CT scans, mammography, and X-rays. We support fast, accurate diagnoses to guide effective treatment plans.',
    slug: 'radiology',
  },
];

export default function ServiceLines() {
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

          {/* Right column */}
          <div className="flex flex-col lg:flex-row pb-16 lg:pb-[80px] gap-[16px]">
            {/* First column of services */}
            <div className="flex flex-col lg:flex lg:flex-col sm:grid sm:grid-cols-3 gap-[20px] lg:py-[220px]">
              {FIRST_COLUMN_SERVICES.map((service, idx) => (
                <div key={idx}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>

            {/* Second column of services */}
            <div className="hidden lg:flex flex-col sm:order-1 sm:grid sm:grid-cols-3 gap-[20px] lg:pt-[80px]">
              {SECOND_COLUMN_SERVICES.map((service, idx) => (
                <div key={idx}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

