import Image from "next/image";
function CompniesLogo() {
  return (
    <div className=" bg-[#F7F7F7] h-[228px] flex justify-center items-center ">
      <div className=" flex flex-col md:flex-row  justify-between gap-5 items-start sm:items-center px-5 ">
        <p className=" font-roboto  font-bold text-xl text-[#000000] ">
          Trusted by 2000+ companies worldwide.
        </p>

        <div>
          <Image
            src={"/images/Logos.svg"}
            alt="companies_logos"
            height={56}
            width={880}
          />
        </div>
      </div>
    </div>
  );
}

export default CompniesLogo;
