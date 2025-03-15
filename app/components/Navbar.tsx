import Image from "next/image";
import logo from "../images/mcml_color_h_detail.svg";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { navigationItems } from "../lib/navigation";
import NavLink from "./NavLink";
import { ModeToggle } from "./DarkToggle";
import logo_dark from "../images/mcml_white_h_detail.svg";

export default function Navbar() {
  return (
    <nav className="bg-background fixed top-0 left-0 z-10 h-16 w-full shadow-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between p-4 lg:px-8">
        <Link href="/" className="block h-full">
          <Image
            src={logo_dark}
            alt="MCML Group"
            priority
            className="hidden h-full w-auto dark:block"
          />
          <Image
            src={logo}
            alt="MCML Group"
            priority
            className="h-full w-auto dark:hidden"
          />
        </Link>
        <ul className="hidden h-full items-center justify-between gap-8 text-lg lg:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-2">
          <li>
            <ModeToggle className="ml-0" />
          </li>
          <li>
            <Sidebar />
          </li>
        </ul>
      </div>
    </nav>
  );
}
