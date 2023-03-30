const TeamBox = ({ img, name, role, desc }) => {
  return (
    <div className="flex shadow-teamBox justify-start w-full max-w-[278px] items-center text-center flex-col bg-white rounded-[15px] p-[10px]">
      <img src={img} className="w-full object-contain" alt="" />
      <h4 className="text-black mt-2 text-xl font-normal">
        {name} / <span className="text-gray text-sm">{role}</span>
      </h4>
      <p className="text-sm text-gray font-light">{desc}</p>
    </div>
  );
};

export default TeamBox;
