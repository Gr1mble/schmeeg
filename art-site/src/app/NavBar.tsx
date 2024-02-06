import Link from "next/link";
import React from "react";
import { IoIosHome } from "react-icons/io";

const NavBar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoIosHome />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;