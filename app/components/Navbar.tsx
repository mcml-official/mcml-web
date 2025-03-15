import Image from "next/image";
import logo from "../images/mcml_color_h_detail.svg";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { navigationItems } from "../lib/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-10 h-16 w-full bg-white shadow-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between p-4 md:px-8">
        <Link href="/" className="block h-full">
          <Image
            src={logo}
            alt="MCML Group"
            priority
            className="h-full w-auto"
          />
        </Link>
        <ul className="hidden h-full items-center justify-between gap-8 text-lg md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <Sidebar />
      </div>
    </nav>
  );
}
