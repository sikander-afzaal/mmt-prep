const TestRow = ({ imgs, title }) => {
  return (
    <div className="wrapper">
      <div className="contain flex-col justify-center items-center text-center gap-8 lg:gap-14">
        <h2 className="text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 place-items-center">
          {imgs.map((elem, idx) => (
            <img
              className="w-full object-cover max-w-[380px]"
              src={elem}
              key={idx + title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestRow;
