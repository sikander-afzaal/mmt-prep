import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Blog from "../../components/Blog";

const Blogs = () => {
  return (
    <div className="blog wrapper mt-[70px] lg:mt-[260px]">
      <div className="contain flex-col justify-start items-center gap-10 lg:gap-14">
        <h2 className="text-gunMetal font-bold text-[30px] sm:text-[40px] md:text-[56px]">
          Blog And News
        </h2>
        <div className="w-full">
          <Splide
            options={{
              width: "100%",
              gap: "2rem",
              type: "loop",
              arrows: true,
              perPage: 3,
              perMove: 1,
              drag: true,
              breakpoints: {
                1019: {
                  perPage: 2,
                },
                720: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <Blog
                title="University Admissions Could Face Emergency Controls"
                img="/blog.png"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
