import profilePic from "public/assets/images/chatgpt.png";
import githubPic from "public/assets/images/icons8-github.svg";
import linkedinPic from "public/assets/images/icons8-linkedin.svg";
import myInfo from "../constants/info";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    // w-1/5 flex flex-col items-center
    <div className="flex flex-col items-center w-1/5">
      {/* <Image
        src={profilePic}
        alt="profile image"
        className="w-24 h-24 roundedfull"
      />
      <Link href="/" className="flex flex-col items-center">
        <h1 className="text-xl ">
          {myInfo.nameCN[0]} {myInfo.nameCN[1]}
        </h1>
        <h2 className="text-m ">
          {myInfo.nameEN[0]} {myInfo.nameEN[1]}
        </h2>
      </Link> */}
      <a href={myInfo.github}>
        <Image src={githubPic} alt="GitHub" width={80} />
      </a>
      <a href={myInfo.linkedin}>
        <Image src={linkedinPic} alt="GitHub" width={80} />
      </a>
    </div>
  );
}
