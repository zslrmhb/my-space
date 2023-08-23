import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="flex md:flex-row justify-between items-center">
        <Link href="/about">
          我 <br /> About
        </Link>
        <Link href="/skills">
          {" "}
          術 <br />
          Skills
        </Link>
        <Link href="projects">
          {" "}
          作 <br />
          Projects
        </Link>
      </nav>
    </>
  );
}
