const Banner = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#0C2141] text-white text-center lg:py-[16px] py-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
      <h1 className=" px-[16px] font-normal text-[12px] lg:text-[15px] lg:leading-[20px] inline-block">
        For enquiries and booking, kindly call{" "}
        <span className="hover:underline underline-offset-[4px]">
          <a href="tel:+23470038722273">+234 700 3872 2273</a>
        </span>{" "}
        or send an email to{" "}
        <span className="hover:underline underline-offset-[4px]">
          <a href="mailto:info@euracarenigeria.com">info@euracarenigeria.com</a>
        </span>
      </h1>
    </div>
  );
};

export default Banner;