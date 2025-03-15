import Image from "next/image";
import sitLogo from "../images/YonseiSIT3.png";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pt-8 pb-16 md:flex-row">
      <p className="text-gray-400">{`© MCML Group. All rights reserved.`}</p>
      <Image src={sitLogo} alt="Yonsei SIT Logo" height={50} priority />
    </footer>
  );
}
