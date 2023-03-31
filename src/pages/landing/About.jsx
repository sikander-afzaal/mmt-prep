const About = () => {
  return (
    <div className="wrapper mt-[60px] lg:mt-[150px]">
      <div className="contain flex-col justify-center items-center gap-8">
        <div className="text-center">
          <h4 className="text-dark leading-[1.5] font-medium text-lg sm:text-2xl">
            How are we
          </h4>
          <h2 className="text-gunMetal text-[34px] sm:text-[40px] md:text-[56px] leading-[1] mt-2 font-bold">
            UNIQUE?
          </h2>
        </div>
        <div className="gap-10 sm:gap-16 lg:gap-[250px] w-full flex pb-10 justify-start items-start flex-col  mt-5 sm:mt-10 lg:mt-[220px]">
          <AboutRow
            img={"/about1.png"}
            title="Customized Platform"
            desc="Flexible platforms that enable your child to learn anytime, anywhere."
          />
          <AboutRow
            order
            img={"/about2.png"}
            title="Qualified Instruction"
            desc="All instructors hold Bachelors & Masters degrees in various specialties and fields. "
          />
          <AboutRow
            img={"/about3.png"}
            title="Delivered Results"
            desc="Consistent, proven, drastic improvement in standardized test scores and college admission."
          />
        </div>
      </div>
    </div>
  );
};

export default About;

const AboutRow = ({ order, img, title, desc }) => {
  return (
    <div
      className={`gap-4 sm:gap-6 flex justify-between  items-center w-full relative lg:flex-row flex-col`}
    >
      <img
        src={img}
        className={`w-full max-w-[530px] object-contain static lg:absolute ${
          order ? "right-5" : "left-5"
        } bottom-2`}
        alt=""
      />
      <div
        className={`flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-2 w-full max-w-[530px] lg:max-w-none py-5 sm:py-12 bg-aboutRow rounded-[15px]  ${
          order ? "pr-5 lg:pr-[580px] pl-5" : "pl-5 lg:pl-[580px] pr-5"
        }`}
      >
        <h3 className="text-[#303C4B] font-bold text-2xl sm:text-[32px]">
          {title}
        </h3>
        <p className="text-gray text-base sm:text-2xl">{desc}</p>
      </div>
    </div>
  );
};
