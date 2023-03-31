const Help = () => {
  return (
    <div className="wrapper bg-btnSolid mt-[100px] lg:mt-[150px] relative isolate py-[50px] lg:pt-[100px]">
      <img
        src="/help-bg.png"
        className="absolute left-0 top-0 -z-10 w-full h-full object-cover"
        alt=""
      />
      <div className="contain justify-start items-center flex-col gap-10 lg:gap-0">
        <h2 className="text-white font-bold text-[30px] sm:text-[40px] md:text-[56px]">
          Who Can Help
        </h2>
        <div className="flex justify-start items-center flex-col gap-10 lg:translate-y-[220px] lg:-mt-[110px] w-full">
          <div className="bg-white shadow-helpBox w-max lg:w-full lg:flex-row flex-col  rounded-[25px] px-10 lg:px-5 py-[45px] flex justify-center items-start lg:items-center gap-14">
            <div className="flex justify-start items-center gap-4">
              <img
                src="/rocket.png"
                className="object-contain w-[79px]"
                alt=""
              />
              <div>
                <h4 className="text-[#222] leading-[1] font-bold text-[38px]">
                  8X
                </h4>
                <p className=" mt-2 text-[#222] leading-[1.3]">
                  Boost your <br /> chances of admission
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img
                src="/stars.png"
                className="object-contain w-[79px]"
                alt=""
              />
              <div>
                <h4 className="text-[#222] leading-[1] font-bold text-[38px]">
                  10+
                </h4>
                <p className=" mt-2 text-[#222] leading-[1.3]">
                  Years of <br />
                  experience
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img
                src="/award.png"
                className="object-contain w-[79px]"
                alt=""
              />
              <div>
                <h4 className="text-[#222] leading-[1] font-bold text-[38px]">
                  84%
                </h4>
                <p className=" mt-2 text-[#222] leading-[1.3]">
                  Get into a top <br />
                  50 college
                </p>
              </div>
            </div>
          </div>
          <button className=" bg-btn rounded-[9px] text-white px-[38px] py-[14px] text-xl font-medium border-none">
            Get A Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
