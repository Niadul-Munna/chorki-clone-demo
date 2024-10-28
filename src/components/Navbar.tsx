import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./LoginForm";
import { FaCrown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MorePopover } from "./MorePopOver";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-8 py-4 backdrop-blur-md  bg-slate-300">
      <ul>
        <li className="flex items-center gap-8 p-3">
          <Link href="/">{<Logo />}</Link>
          <Link href="/originals">Originals</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/series">Series</Link>
          <Link href="/bytes">Bytes</Link>
          <Link href="/shortfilms">Shortfilms</Link>
          <Link href="/songs">Songs</Link>
        </li>
      </ul>
      <div className="flex items-center gap-8 ">
        <div className="flex flex-col items-center leading-none">
          <FiSearch className="size-5 " />
          Search
        </div>
        <div>
          <LoginForm />
        </div>
        <Button className="bg-orange-500">
          <FaCrown /> Subscribe
        </Button>
        <div>
          <MorePopover />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
