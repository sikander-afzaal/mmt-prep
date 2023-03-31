import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import TeamBox from "../../components/TeamBox";

const Team = () => {
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    const arrowLeft = document.querySelector(".team .splide__arrow--prev");
    const arrowRight = document.querySelector(".team .splide__arrow--next");
    const paginationWidth = document
      .querySelector(".splide__pagination")
      .getBoundingClientRect().width;
    arrowLeft.style.transform = `translateY(-20%) translateX(-${
      paginationWidth / 2 + 30
    }px)`;
    arrowRight.style.transform = `translateY(-20%) translateX(${
      paginationWidth / 2 + 30
    }px)`;
  }, [windowWidth]);

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="team wrapper mt-[80px] lg:mt-[150px] ">
      <div className="contain flex-col justify-center items-center text-center gap-2 sm:gap-8">
        <h2 className="text-[30px] md:text-[40px] sm:text-[56px] font-bold text-gunMetal">
          Our Team Leads
        </h2>
        <div className="w-full pb-10">
          <Splide
            hasTrack={false}
            options={{
              width: "100%",
              gap: "2rem",
              type: "loop",
              arrows: true,
              pagination: true,
              perPage: 4,
              perMove: 1,
              drag: true,
              breakpoints: {
                1230: {
                  perPage: 3,
                },
                1019: {
                  perPage: 2,
                },
                600: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
              <SplideSlide>
                <TeamBox
                  desc="Welcome to the website. If you're here, you're likely looking to find random words."
                  name="Sean Kim"
                  role="MMT founder"
                  img="/team.png"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Team;
