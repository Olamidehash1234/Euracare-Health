export default function ValuesSection() {
  return (
    <section className="px-6 py-12 lg:px-[80px] lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[95px] ">
      {/* Left Image */}
      <div>
        <img
          src="/about/zigzag.png"
          alt="Patients lying on grass"
          className="rounded-[12px] w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl lg:text-[50px] font-medium text-[#0C2141] leading-snug lg:leading-[50px] lg:tracking-[-1.8px] mb-6 lg:mb-[20px]">
          Actions speak louder <br /> than words
        </h2>

        <div className="space-y-5 lg:space-y-[20px] text-[#02070D] text-[16px] leading-relaxed lg:leading-[24px] lg:tracking-[-0.54px] text-justify">
          <p>
            At Euracare Hospital, our unwavering commitment is to the health,
            dignity, and overall well-being of every individual we have the
            privilege to serve. We believe that every patient is more than a
            case or condition — they are a unique individual with their own
            story, needs, and aspirations. That is why we place our patients at
            the very heart of everything we do, ensuring that their voices are
            heard, their concerns are addressed, and their care is personalised
            to suit their specific circumstances.
          </p>

          <p>
            We recognise and celebrate the intrinsic value of each person, and
            we approach healthcare with a dedication to inclusion, compassion,
            and respect. These values shape the way we interact not only with
            our patients, but also with their families and our colleagues. By
            fostering an environment where empathy meets medical excellence, we
            ensure that every patient experiences care that is not only
            clinically advanced but also deeply human.
          </p>

          <p>
            Our goal is to create a supportive space where trust is built,
            healing is prioritised, and lives are improved — one patient at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
