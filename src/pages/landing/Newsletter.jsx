const Newsletter = () => {
  return (
    <div className="wrapper bg-[#F6F6F7] mt-[80px] lg:mt-[150px] py-[70px] lg:py-[100px]">
      <div className="contain flex-col text-center  justify-start items-center gap-8">
        <h2 className="text-gunMetal leading-[1] font-bold text-[30px] sm:text-[40px] md:text-[56px]">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-[#7B8E9DCC] text-base md:text-xl leading-[1]">
          Subscribe To MMT Newsletter, Attached with admissions secrets.
        </p>
        <div className="max-w-[650px] w-full bg-white px-1 py-1 h-[63px] rounded-full overflow-hidden flex justify-start items-center gap-1">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full text-[#999999] pl-4 bg-transparent border-none"
          />
          <button className="flex justify-between aspect-square sm:aspect-auto sm:min-w-[190px] items-center gap-1 px-2 h-full bg-btnSolid rounded-full">
            <p className="text-white font-medium pl-3 sm:block hidden">
              Subscribe Now
            </p>
            <div className="bg-white w-[41px] aspect-square flex justify-center items-center text-btnSolid rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
