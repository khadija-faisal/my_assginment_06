import Image from "next/image";

function HomePage() {
  return (
    <>
      <main className=" w-full flex flex-col  items-center sm:flex-row  ">
        <div className=" flex  items-center justify-center my-10 sm:my-0 sm:w-1/2">
          <div className=" flex w-[90%]  xl:w-[85%] lg:w-[80%] pl-5 pr-4  flex-col justify-center items-start gap-4">
            <div className="  flex items-center flex-col gap-4">
              <h1 className=" font-roboto text-[45px] sm:text-[35px] lg:text-[45px] leading-tight xl:text-[56px]  font-bold ">
                Learn new skills online with ease
              </h1>
              <p className=" text-lg  font-normal ">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
            <div className=" flex gap-4">
              <button className="py-3 text-xs md:text-base  bg-[#000000] text-[#FFFFFF] px-4 xl:px-6 border rounded-[5px] font-roboto">
                Start learning now
              </button>
              <button className="py-3 text-xs md:text-base text-[#000000] px-4 xl:px-6 border-2 rounded-[5px] font-roboto">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        <div className=" flex sm:w-1/2">
          <Image
            src={"/images/Image.svg"}
            alt="hero_image"
            width={710}
            height={900}
          />
        </div>
      </main>
    </>
  );
}

export default HomePage;
