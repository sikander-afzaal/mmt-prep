const Hero = () => {
  return (
    <div className="pt-[150px] relative  sm:pt-[100px] pb-[120px] lg:pt-[180px] wrapper">
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowBlue left-0 -translate-x-[20%] top-[12%]"></div>
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowPurple right-0 translate-x-[50%] top-0 -translate-y-[50%]"></div>
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowRedish right-[20%]  top-[5%] "></div>
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowCyan right-0 translate-x-[20%] top-[12%]"></div>
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowPinkish right-[20%] top-[0%] -translate-y-[60%]"></div>
      <div className="absolute -z-10 pointer-events-none w-full max-w-[750px] aspect-square rounded-full blur-[200px] bg-shadowCyan left-0 top-[0%] -translate-y-[60%]"></div>
      <div className="contain flex-col text-center justify-center isolate items-center gap-5 relative">
        <img
          src="/hero-star.png"
          className="absolute md:block hidden opacity-20 -z-10 top-0 left-0"
          alt=""
        />
        <img
          src="/hero-top.png"
          className="absolute md:block hidden  -z-10 top-0 right-0"
          alt=""
        />
        <img
          src="/hero-arrow-right.png"
          className="absolute md:block hidden  opacity-20 -z-10 bottom-0 right-[10%]"
          alt=""
        />
        <img
          src="/hero-left-arrow.png"
          className="absolute md:block hidden opacity-20 -z-10 bottom-0 left-[10%]"
          alt=""
        />
        <h1 className="text-gunMetal leading-[1.3] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-bold max-w-[700px]">
          Extraordinary Futures Begin with MMT Prep
        </h1>
        <p className="text-base sm:text-xl text-gray max-w-[570px]">
          Your child can do anything with the right support. You’ll love
          watching your child
        </p>
        <button className="w-[200px] rounded-full h-[53px] text-white bg-btnSolid border border-btnSolid border-solid hover:bg-transparent hover:text-btnSolid transition-all duration-300 flex justify-center items-center text-base font-medium">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;
