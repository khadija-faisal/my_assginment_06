import Image from "next/image";
import { Button } from "@/components/ui/button";

function Courses() {
  return (
    <main className="h-full w-[100%] flex flex-col items-center font-roboto justify-center gap-10 font-roboto">
      <div className=" flex flex-col text-center gap-6 ">
        <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold ">
          Courses
        </h2>
        <span>Your Ultimate Guide to learning</span>
      </div>
      <div className=" flex w-[96%]   flex-col gap-7">
        <div className=" flex items-center justify-center">
          <span className=" px-4 text-sm md:text-base border-b-2 border-black text-center py-2">
            Popular
          </span>
          <span className=" px-4 text-sm md:text-base  text-center py-2">
            Recommended
          </span>
          <span className=" px-4 text-sm md:text-base text-center py-2">
            Best Price
          </span>
        </div>
        <div className=" main h-[90%]  flex flex-col items-center gap-8 ">
          <div className=" row1 h-[47%] flex md:flex-row flex-col items-center justify-center gap-5 ">
            <div className=" w-[80%] md:w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course1.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    UX/UI Design 201
                  </h5>
                  <span className=" text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
            <div className="w-[80%] md:w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course2.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    Introduction to Python
                  </h5>
                  <span className=" text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
            <div className=" w-[80%] md:w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course3.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    Data Analysis Beginners
                  </h5>
                  <span className=" text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" row1 h-[47%] hidden md:flex justify-center gap-5 ">
            <div className=" w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course4.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    Art Specialization
                  </h5>
                  <span className="  text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
            <div className=" w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course5.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    Rule of Law
                  </h5>
                  <span className=" text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
            <div className=" w-[32%] flex flex-col gap-4 bg-[#F7F7F7]">
              <div>
                <Image
                  src={"/images/course6.svg"}
                  alt="image"
                  height={300}
                  width={465}
                />
              </div>
              <div className=" flex flex-col p-3 gap-5">
                <div className=" flex justify-between">
                  <span className=" text-sm font-semibold">Design</span>
                  <span>
                    <Image
                      src={"/images/Star.svg"}
                      alt="icon"
                      width={48}
                      height={24}
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" text-xl lg:text-2xl font-bold">
                    Introduction to webflow
                  </h5>
                  <span className=" text-sm lg:text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </span>
                </div>
                <div className=" flex ">
                  <Button variant="outline">Enroll Now</Button>
                  <span className="text-base font-medium py-2 px-5"> $400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <Button variant="outline">View All Courses</Button>
        </div>
      </div>
    </main>
  );
}

export default Courses;
