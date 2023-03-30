import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper z-[50] bg-white fixed top-0 left-0 ">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="lg:hidden cursor-pointer block fixed top-0 left-0 bg-black opacity-60 z-[88] w-full h-full"
        ></div>
      )}
      <div className="contain justify-between items-center gap-2 h-[80px] lg:h-[100px]">
        <img src="/logo.png" className="object-contain h-[30px]" alt="" />
        <nav
          className={`z-[90] lg:static fixed w-full h-full max-w-full sm:max-w-[450px] px-[3rem] pt-[6rem] pb-[3rem] overflow-y-auto lg:w-auto lg:max-w-none lg:h-auto lg:p-0 lg:overflow-visible ${
            headerToggle ? "right-0" : "-right-[600px]"
          } flex justify-start items-center sm:items-start lg:bg-transparent bg-gunMetal lg:justify-center lg:items-center gap-7 top-0 flex-col lg:flex-row transition-all duration-700`}
        >
          <a
            href="#"
            onClick={() => setHeaderToggle(false)}
            className="text-white lg:text-dark font-normal text-base"
          >
            Program
          </a>
          <a
            href="#"
            onClick={() => setHeaderToggle(false)}
            className="text-white lg:text-dark font-normal text-base"
          >
            College Admission
          </a>
          <a
            href="#"
            onClick={() => setHeaderToggle(false)}
            className="text-white lg:text-dark font-normal text-base"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={() => setHeaderToggle(false)}
            className="text-white lg:text-dark font-normal text-base"
          >
            About Us
          </a>
          <button className="block lg:hidden border-white border-solid border  bg-btn rounded-full text-white px-[38px] py-[10px] text-xl font-normal ">
            Sign In
          </button>
        </nav>
        <button className="lg:block hidden bg-btn rounded-full text-white px-[38px] py-[10px] text-xl font-normal border-none">
          Sign In
        </button>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 relative block lg:hidden z-[91] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#333333"
            className="w-6 h-6 relative block lg:hidden z-[91] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Header;
