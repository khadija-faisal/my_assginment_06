import Image from "next/image";
function Testimonials() {
  return (
    <main className=" font-roboto h-full py-20 px-5 bg-[#F7F7F7] flex items-center md:items-start justify-center gap-10 flex-col">
      <div className=" flex sm:pl-10 justify-center  flex-col gap-6">
        <h2 className=" text-4xl text-center sm:text-left hidden md:block md:text-5xl font-bold">
          Customer testimonials
        </h2>
        <h2 className=" text-3xl text-center md:hidden font-bold">
          What Our Student Say
        </h2>
        <p className=" text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center ">
        <div className=" w-[95%] flex items-center justify-center flex-row gap-5">
          <div className=" w-[90%] md:w-[50%]  lg:w-[33%] p-6 border border-black flex flex-col gap-4">
            <div>
              <Image
                src={"/images/Stars.svg"}
                alt="stars"
                width={116}
                height={18}
              />
            </div>
            <p className=" w-[100%] sm:w-[80%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className=" flex gap-2">
              <span>
                <Image
                  className=" rounded-[50%]"
                  src={"/images/team3.svg"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </span>
              <span className=" flex flex-col">
                <span className=" text-base font-semibold">James Nduku</span>
                <span className=" text-base font-normal">
                  Software Developer
                </span>
              </span>
            </div>
          </div>
          <div className="w-[50%] lg:w-[33%] p-6 border border-black hidden md:flex flex-col gap-4">
            <div>
              <Image
                src={"/images/Stars.svg"}
                alt="stars"
                width={116}
                height={18}
              />
            </div>
            <p className=" w-[80%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className=" flex gap-2">
              <span>
                <Image
                  className=" rounded-[50%]"
                  src={"/images/team4.svg"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </span>
              <span className=" flex flex-col">
                <span className=" text-base font-semibold">Stephen Kerubo</span>
                <span className=" text-base font-normal">UI/UX Designer</span>
              </span>
            </div>
          </div>
          <div className=" w-[33%] p-6 border border-black hidden lg:flex flex-col gap-4">
            <div>
              <Image
                src={"/images/Stars.svg"}
                alt="stars"
                width={116}
                height={18}
              />
            </div>
            <p className=" w-[80%]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className=" flex gap-2">
              <span>
                <Image
                  className=" rounded-[50%]"
                  src={"/images/team5.svg"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </span>
              <span className=" flex flex-col">
                <span className=" text-base font-semibold">
                  Erick Kipkemboi
                </span>
                <span className=" text-base font-normal">Scrum Master</span>
              </span>
            </div>
          </div>
        </div>
        <div className=" flex px-2 w-[70%] md:w-[95%]  justify-between">
          <Image src={"/images/dots.svg"} alt="dots" width={72} height={8} />
          <Image
            src={"/images/buttons.svg"}
            alt="dots"
            width={111}
            height={48}
          />
        </div>
      </div>
    </main>
  );
}

export default Testimonials;
