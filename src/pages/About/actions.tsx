export default function ValuesSection() {
  return (
    <section className="px-[16px] py-[60px] lg:px-[80px] items-center lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[95px] ">
      {/* Left Image */}
      <div className="overflow-hidden h-[350px] lg:h-[670px]">
        <img
          src="https://res.cloudinary.com/dnycq9llb/image/upload/v1764675985/healthcare_tb8hof_kb68mq.jpg"
          alt="Patients lying on grass"
          className="rounded-[12px] w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-[20px] lg:text-[50px] font-medium text-[#0C2141] leading-snug lg:leading-[50px] lg:tracking-[-1.8px] mb-6 lg:mb-[20px]">
          World Class Healthcare, Right Here at Home.
        </h2>

        <div className="space-y-5 lg:space-y-[20px] text-[#02070D] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] lg:tracking-[-0.54px] text-justify">
          <p>
            At Euracare, we believe you shouldn’t have to travel abroad to access world-class healthcare. We bring international standards of medicine to Nigeria, combining advanced technology, globally trained specialists, and personalised care under one roof. For patients who expect the very best, Euracare offers the expertise, precision, and compassion found in the world’s leading medical centers, delivered with the comfort and convenience of being close to home.
          </p>
          <p>
            Our commitment goes beyond clinical excellence. From the moment you arrive, our dedicated patient liaisons, cutting-edge facilities, and multidisciplinary teams ensure that your journey is smooth, discreet, and tailored to your unique needs.
          </p>
          <p>
            At Euracare, we are redefining private healthcare in Nigeria, setting a new benchmark where innovation meets empathy, and where every patient receives care that is both globally advanced, yet personalized.
          </p>
        </div>
      </div>
    </section>
  );
}
