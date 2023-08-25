import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-center space-x-12">
      <NavLink href="/about" chineseLabel={"我"} englishLabel={"ABOUT"} />
      <NavLink href="/skills" chineseLabel={"術"} englishLabel={"SKILLS"} />
      <NavLink
        href="/projects"
        chineseLabel={"作"}
        englishLabel={"PROJECTS"}
      />
    </div>
  );
}

function NavLink({ href, chineseLabel, englishLabel }) {
  return (
    <>
      <Link className="px-8" href={href}>
        <div className="text-xl text-center"> {chineseLabel} </div>
        <div className="text-center"> {englishLabel} </div>
      </Link>
    </>
  );
}