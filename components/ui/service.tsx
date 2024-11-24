import Image from "next/image";
function ServicePage() {
  return (
    <main className=" h-full pt-20 flex-col gap-20 flex justify-center items-center">
      <div className=" flex flex-col items-center text-center px-4  lg:text-start lg:items-start gap-4">
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold font-roboto text-[#000000] ">
          Explore Courses By Category
        </h2>
        <p className=" font-roboto text-lg font-normal text-[#000000]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <div className="h-[536px]  flex flex-col  gap-10">
          <div className="h-[132px] flex justify-center items-center gap-4 lg:gap-8 ">
            <div className=" flex items-center justify-center py-5 w-[370px] lg:w-[410px] md:w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7  bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Design & Development
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" md:flex hidden items-center justify-center py-5 lg:w-[410px] w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Marketing & banking
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" xl:flex hidden items-center justify-center py-5 w-[410px] bg-[#F7F7F7] gap-5">
              <div className=" p-9 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Development $ testing
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[132px] justify-center items-center flex gap-4 lg:gap-8 ">
            <div className=" flex items-center justify-center py-5 w-[370px] lg:w-[410px] md:w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Communication & Info
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" md:flex hidden items-center justify-center py-5 lg:w-[410px] w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col ">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Digital Marketing test
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" xl:flex items-center hidden justify-center py-5 w-[410px] bg-[#F7F7F7] gap-5">
              <div className=" p-9 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Self Development work{" "}
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[132px] justify-center items-center flex gap-4 lg:gap-8 ">
            <div className=" flex items-center justify-center py-5 w-[370px] lg:w-[410px] md:w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Business & finnance
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" md:flex hidden items-center justify-center py-5 lg:w-[410px] w-[350px] bg-[#F7F7F7] gap-5">
              <div className=" lg:p-9 p-7 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Finance & Information
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
            <div className=" xl:flex items-center justify-center hidden  py-5 w-[410px] bg-[#F7F7F7] gap-5">
              <div className=" p-9 bg-[#FFFFFF] ">
                <Image
                  src={"/images/pen-tool-2.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-xl font-semibold font-roboto text-[#000000]">
                    Consulting and working
                  </span>
                  <span className="text-lg font-normal font-roboto text-[#000000]">
                    50+ Courses Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className=" px-6 py-3 border rounded-sm border-[#000000]">
          View All Courses{" "}
        </button>
      </div>
    </main>
  );
}

export default ServicePage;
