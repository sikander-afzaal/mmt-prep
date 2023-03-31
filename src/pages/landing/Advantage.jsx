const Advantage = () => {
  const Data = [
    {
      name: "Cornell University",
      overall: "100%",
      admission: "100%",
      advantage: "5x",
    },
    {
      name: "Colgate University",
      overall: "100%",
      admission: "100%",
      advantage: "1x",
    },
    {
      name: "New York University",
      overall: "100%",
      admission: "100%",
      advantage: "3x",
    },
    {
      name: "Boston University",
      overall: "100%",
      admission: "100%",
      advantage: "1x",
    },
    {
      name: "Boston College",
      overall: "100%",
      admission: "100%",
      advantage: "2x",
    },
    {
      name: "Baylor University",
      overall: "100%",
      admission: "100%",
      advantage: "5x",
    },
    {
      name: "Carnegie Mellon",
      overall: "100%",
      admission: "100%",
      advantage: "1x",
    },
    {
      name: "Harvard University",
      overall: "100%",
      admission: "100%",
      advantage: "22x",
    },
    {
      name: "Case Western",
      overall: "100%",
      admission: "100%",
      advantage: "3x",
    },
  ];
  return (
    <div className="wrapper mt-[80px] lg:-mt-[250px]">
      <div className="contain flex-col justify-start items-center gap-10">
        <h2 className="text-gunMetal lg:text-white text-[30px] sm:text-[40px] lg:text-[56px] font-bold">
          MMT Advantage
        </h2>
        <div className="w-full flex overflow-x-auto justify-start items-start lg:items-center flex-col bg-white shadow-helpBox rounded-[25px] py-10 px-5">
          <div className="grid grid-cols-4 min-w-[900px] mb-6 gap-6 px-10 items-center w-full">
            <p className="font-semibold text-xl text-gunMetal">College Name</p>
            <div className="w-full text-dark font-semibold text-xl py-4 flex justify-center items-center text-center bg-[#EDEEEF] rounded-[9px]">
              Overall <br /> Acceptance Rate
            </div>
            <div className="w-full text-white font-semibold text-xl py-4 flex justify-center items-center text-center bg-btn rounded-[9px]">
              MMT <br /> Admissions Rate
            </div>
            <div className="w-full text-dark font-semibold text-xl py-4 flex justify-center items-center text-center bg-[#EDEEEF] rounded-[9px]">
              MMT <br /> Advantage
            </div>
          </div>
          {Data.map((elem, idx) => {
            return (
              <div
                key={idx + elem.name}
                className={`grid px-10 min-w-[900px] grid-cols-4 py-3 items-center w-full rounded-[15px] gap-6 ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#1E15410D]"
                }`}
              >
                <p className="text-[#494949] text-xl">{elem.name}</p>
                <p className="text-gunMetal font-semibold text-2xl w-full text-center">
                  {elem.overall}
                </p>
                <p className="text-gunMetal font-semibold text-2xl w-full text-center">
                  {elem.admission}
                </p>
                <p className="text-gunMetal font-semibold text-2xl w-full text-center">
                  {elem.advantage}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
