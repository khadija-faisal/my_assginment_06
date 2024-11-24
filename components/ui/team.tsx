import Image from "next/image";
function Team() {
  return (
    <main className=" flex h-full mt-10 justify-center  font-roboto bg-[#F7F7F7] flex-col gap-16 ">
      <div className="title flex pt-10 flex-col gap-5 text-center">
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold  ">
          Our team
        </h2>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
      </div>
      <div className="content gap-16 flex flex-col bg-[#F7F7F7]">
        <div className=" w-[100%] flex flex-col sm:flex-row items-center gap-10 sm:gap-5 justify-center ">
          <div className=" card w-[90%] sm:w-[50%] lg:w-[33%]   flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team1.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">James Nduku</span>
              <span className=" text-lg font-normal">
                Marketing Coordinator
              </span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className=" card w-[90%] sm:w-[50%] lg:w-[33%] flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team2.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">Joseph Munyambu</span>
              <span className=" text-lg font-normal">Nursing Assistant</span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={20}
                height={20}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className=" card w-[90%] sm:w-[33%] flex sm:hidden lg:flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team3.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">Joseph Ngumbau</span>
              <span className=" text-lg font-normal">Medical Assistant</span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
        </div>
        <div className=" w-[100%] hidden sm:flex items-center gap-5 justify-center row">
          <div className=" card w-[90%] sm:w-[50%] lg:w-[33%]   flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team4.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">Erick Kipkemboi</span>
              <span className=" text-lg font-normal">Web Designer</span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className=" card w-[90%] sm:w-[50%] lg:w-[33%] flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team5.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">Stephen Kerubo</span>
              <span className=" text-lg font-normal">President of Sales</span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className=" card w-[33%] hidden lg:flex flex-col justify-center items-center gap-6 ">
            <div>
              <Image
                src={"/images/team6.svg"}
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <div className=" flex text-center flex-col gap-1">
              <span className="text-xl font-semibold">John Leboo</span>
              <span className=" text-lg font-normal">Dog Trainer</span>
            </div>
            <div className=" flex gap-2 p-1">
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                width={17}
                height={20}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                width={17}
                height={17}
              />
              <Image
                src={"/images/web.svg"}
                alt="icon"
                width={17}
                height={17}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Team;
