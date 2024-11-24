function Acheivement() {
  return (
    <div className=" h-[488px] flex justify-center items-center bg-[#FFFFFF]">
      <div className=" flex lg:h-[85%] font-roboto w-[90%] flex-col items-center justify-center gap-8 ">
        <div className=" flex flex-col gap-4">
          <h2 className=" font-bold text-center text-3xl sm:text-4xl lg:text-5xl">
            Our Achivements
          </h2>
          <p className=" font-normal sm:text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row w-[100%] items-center  gap-6">
          <ul className=" flex gap-6 items-center w-[100%] py-2 lg:w-[50%]  ">
            <li className="flex flex-col gap-2 w-[50%]  items-center">
              <span className=" font-bold text-3xl md:4xl xl:text-5xl">
                +200
              </span>
              <span className="text-sm md:text-base font-normal ">Courses</span>
            </li>
            <li className="flex flex-col gap-2 w-[50%] items-center">
              <span className=" font-bold text-3xl md:4xl xl:text-5xl">
                50K
              </span>
              <span className="text-sm md:text-base font-normal">Mentors</span>
            </li>
          </ul>
          <ul className=" flex gap-6 py-2 lg:w-[50%] w-[100%]  justify-around ">
            <li className="flex flex-col gap-2 w-[50%] items-center">
              <span className=" font-bold text-3xl md:4xl xl:text-5xl">
                370k
              </span>
              <span className=" text-sm md:text-base font-normal">
                Students
              </span>
            </li>
            <li className="flex flex-col gap-2 w-[50%] items-center">
              <span className=" font-bold text-3xl md:4xl xl:text-5xl">
                100+
              </span>
              <span className=" text-sm md:text-base font-normal">
                Recognition
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Acheivement;
