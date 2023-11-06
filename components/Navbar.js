import myInfo from "../constants/info";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="flex  md:flex-row justify-between items-center">
          <div className="flex flex-col ">
            <Link href="/">
              <h1 className="font-semibold text-xl hover:text-2xl">
                {myInfo.nameCN[0]} &ensp; {myInfo.nameCN[1]}
              </h1>
              <p className="text-base font-light text-gray-500">
                {myInfo.nameEN}
              </p>
            </Link>
          </div>

          <div className="space-x-8 hidden md:block">
            <Link
              href="/about"
              className={`text-l hover:text-xl ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold text-xl"
                  : "text-gray-600 font-normal "
              }`}>
              我 ABOUT{" "}
            </Link>
            <Link
              href="/skills"
              className={`text-l hover:text-xl ${
                router.asPath === "/skills"
                  ? "text-gray-800 font-bold text-xl"
                  : "text-gray-600 font-normal "
              }`}>
              術 SKILLS{" "}
            </Link>
            <Link
              href="/projects"
              className={`text-l hover:text-xl ${
                router.asPath === "/projects"
                  ? "text-gray-800 font-bold text-xl"
                  : "text-gray-600 font-normal "
              }`}>
              作 PROJECTS{" "}
            </Link>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a className="" href={myInfo.github}>
              <Image
                src={myInfo.githubPic}
                alt="GitHub"
                width={50}
                height={50}
              />
            </a>
            <a href={myInfo.linkedin}>
              <Image
                src={myInfo.linkedinPic}
                alt="Linkedin"
                width={50}
                height={50}
              />
            </a>
          </div>

          {/* <NavLink
              href="/about"
              chineseLabel={"我"}
              englishLabel={"ABOUT"}
            />
            <NavLink
              href="/skills"
              chineseLabel={"術"}
              englishLabel={"SKILLS"}
            />
            <NavLink
              href="/projects"
              chineseLabel={"作"}
              englishLabel={"PROJECTS"}
            /> */}
        </div>
        <div className="space-x-8 block md:hidden mt-4">
          <Link href="/about" className="text-base font-normal text-gray-600">
            ABOUT
          </Link>
          <Link
            href="/skills"
            className="text-base font-normal text-gray-600 ">
            SKILLS
          </Link>
          <Link
            href="/projects"
            className="text-base font-normal text-gray-600 ">
            PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
}

// function NavLink({ href, chineseLabel, englishLabel }) {
//   return (
//     <>
//       <Link className="px-8" href={href}>
//         <div className="text-3xl text-center font-semibold">
//           {" "}
//           {chineseLabel}{" "}
//         </div>
//         <div className="text-center"> {englishLabel} </div>
//       </Link>
//     </>
//   );
// }

function NavLink({ href, chineseLabel, englishLabel }) {
  return (
    <>
      <Link className="" href={href}>
        <div className=""> {chineseLabel} </div>
        <div className=""> {englishLabel} </div>
      </Link>
    </>
  );
}
