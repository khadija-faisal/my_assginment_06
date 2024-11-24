import { Button } from "@/components/ui/button";
import Image from "next/image";
function Footer() {
  return (
    <main className=" h-full font-roboto flex justify-center my-20 bg-[#FFFFFF]">
      <div className=" Container w-[95%] flex flex-col  gap-20">
        <div className="flex flex-col items-center gap-5 justify-center md:justify-between md:flex-row">
          <div className=" flex items-center md:items-start text-center md:text-left flex-col">
            <span className=" text-lg font-semibold">
              Subscribe to our newsletter
            </span>
            <span className=" text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className=" flex flex-col  gap-3">
            <div className=" flex flex-col md:flex-row items-center gap-3">
              <input
                className="border py-2 px-3 rounded-lg border-black"
                type="text"
                placeholder=" Enter your email"
              />
              <Button className=" px-20 md:px-5" variant="outline">
                Subscribe
              </Button>
            </div>
            <span className=" text-xs md:text-sm">
              By subscribing you agree to with our{" "}
              <span className=" underline decoration-solid">
                Privacy Policy
              </span>
            </span>
          </div>
        </div>
        <div className="Link w-[100%] flex flex-col items-center md:items-start  md:flex-row md:text-start text-center  gap-10">
          <div className=" logo w-[70%] md:w-[25%] px-5">
            <div className="flex  justify-center md:justify-start  gap-1">
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                height={30}
                width={32}
              />
              <span className=" text-[25px] font-bold">Ddsgnr</span>
            </div>
          </div>
          <div className="w-[70%] md:w-[25%] px-5 flex flex-col gap-5">
            <span className=" text-base font-semibold ">Courses</span>
            <ul className=" list-none flex flex-col gap-5 text-sm font-normal hover:underline ">
              <li>Business</li>
              <li> Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>
          <div className=" w-[70%] md:w-[25%] px-5 flex flex-col gap-5">
            <span className=" text-base font-semibold ">About Us</span>
            <ul className=" list-none flex flex-col gap-5 text-sm font-normal ">
              <li>Career</li>
              <li> Resume</li>
              <li>Technology</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
            </ul>
          </div>
          <div className=" w-[70%] md:w-[25%] px-5 flex flex-col gap-5">
            <span className=" text-base font-semibold ">Courses</span>
            <ul className=" list-none flex flex-col gap-5 text-sm font-normal ">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" h-[1px] bg-[#000000]"></div>
          <div className=" flex flex-col items-center gap-5 md:gap-0 md:flex-row  justify-between">
            <div className=" flex flex-col items-center sm:flex-row gap-3 text-sm">
              <span>2023 Ddsgnr. All right reserved.</span>
              <span className=" underline decoration-solid">
                Privacy Policy
              </span>
              <span className=" underline decoration-solid">
                Terms of Service
              </span>
              <span className=" underline decoration-solid">
                Cooking Setting
              </span>
            </div>
            <div className=" flex gap-3">
              <Image
                src={"/images/Facebook.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/Instagram.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/Twitter.svg"}
                alt="icon"
                height={20}
                width={20}
              />
              <Image
                src={"/images/Vector.svg"}
                alt="icon"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
