import About from "./About";
import Advantage from "./Advantage";
import Blogs from "./Blogs";
import Help from "./Help";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Team from "./Team";
import TestRow from "./TestRow";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="wrapper gap-[70px] lg:gap-[140px] lg:pb-[380px] py-[50px] lg:pt-[100px] mt-[40px] sm:mt-[70px] bg-[#1E1541]">
        <TestRow
          title="2022 Admission Results"
          imgs={["/about3.png", "/about3.png", "/about3.png"]}
        />
        <TestRow
          title="Standardized Tests"
          imgs={["/about3.png", "/about3.png", "/about3.png"]}
        />
      </div>
      <Advantage />
      <Team />
      <Help />
      <Blogs />
      <Newsletter />
    </>
  );
};

export default Index;
