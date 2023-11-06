import myInfo from "../constants/info";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text Container */}
      <div className="w-full md:w-1/2 mx-auto md:text-left lg:p-20">
        <h1 className="text-8xl ">光臨</h1>
        <h2 className="text-6xl">
          <strong>WELCOME</strong> TO MY SPACE
        </h2>
      </div>

      {/* Image Container */}
      <div className="hidden lg:block  relative  w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <Image src={myInfo.profilePic} alt="avatar" className="" />
        </div>
      </div>
    </div>
  );
  //   <div className="absolute top-10">
  //     <h1 className="text-8xl">光臨</h1>
  //     <h2 className="text-6xl">
  //       <strong>WELCOME</strong> TO MY SPACE
  //     </h2>
  //     <div className="">
  //       <Image src={myInfo.profilePic} alt="avatar" className="" />
  //     </div>
  //   </div>
  // );
}
