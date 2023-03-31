const Blog = ({ img, title }) => {
  return (
    <div className="flex bg-white rounded-[5px] justify-start items-start flex-col w-full max-w-[334px]">
      <img src={img} className="w-full object-cover h-[244px]" alt="" />
      <p className="px-4 text- mt-3 font-semibold text-dark">{title}</p>
    </div>
  );
};

export default Blog;
