const Footer = () => {
  return (
    <footer className="wrapper bg-[#2A3543]  pt-[60px] pb-8">
      <div className="contain flex-col justify-start items-center gap-5">
        <img src="/logo-white.png" className="h-[40px] object-contain" alt="" />
        <p className="text-center sm:text-base text-sm text-white opacity-60">
          Hundreds of students have been accepted into the country’s top
          colleges thanks to MMT Prep’s holistic college admissions consulting
          services. Our expert consultants create personalized admissions
          counseling packages for every student to ensure they go through the
          college application process with the best chance of getting accepted
          into the world’s most competitive programs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between mt-8 items-start w-full gap-x-2 gap-y-6 sm:gap-6">
          <div className="flex justify-start items-start flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">Programs</h3>
            <a href="#" className="text-white">
              Elementary School
            </a>
            <a href="#" className="text-white">
              Middle School
            </a>
            <a href="#" className="text-white">
              High School
            </a>
            <a href="#" className="text-white">
              SAT / ACT
            </a>
            <a href="#" className="text-white">
              Computer Science
            </a>
            <a href="#" className="text-white">
              AMC / Mathcouts
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">
              College Admission
            </h3>
            <a href="#" className="text-white">
              Grade 12
            </a>
            <a href="#" className="text-white">
              BS/MD
            </a>
            <a href="#" className="text-white">
              BS/DMD
            </a>
            <a href="#" className="text-white">
              BS/BSN
            </a>
            <a href="#" className="text-white">
              Transfer
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">Resources</h3>
            <a href="#" className="text-white">
              Blogs
            </a>
            <a href="#" className="text-white">
              Practice Exams
            </a>
            <a href="#" className="text-white">
              College Estimate
            </a>
            <a href="#" className="text-white">
              Resume Builder
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">
              Future Development
            </h3>
            <a href="#" className="text-white">
              MMT Worksheet
            </a>
            <a href="#" className="text-white">
              MMT Publications
            </a>
            <a href="#" className="text-white">
              MMT Research Institute
            </a>
            <a href="#" className="text-white">
              MMT Labs
            </a>
            <a href="#" className="text-white">
              Franchising
            </a>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">Get In Touch</h3>
            <a href="tel:+1-971-256-2586" className="text-white">
              Call <br />
              +1-971-256-2586
            </a>
            <a href="#" className="text-white">
              Text/Whatsapp
              <br />
              +1-971-256-2586
            </a>
            <a href="mailto:admin@mmtprep.com" className="text-white">
              Email
              <br />
              admin@mmtprep.com
            </a>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between items-center w-full border-t border-solid border-gray pt-6 mt-6">
          <div className="flex justify-start items-center gap-4">
            <a href="#" target="blank">
              <img
                className="w-[30px] aspect-square object-contain"
                src="/fb.png"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                className="w-[30px] aspect-square object-contain"
                src="/twitter.png"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                className="w-[30px] aspect-square object-contain"
                src="/telegram.png"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                className="w-[30px] aspect-square object-contain"
                src="/insta.png"
                alt=""
              />
            </a>
          </div>
          <p className="text-white">©2023 MMT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
