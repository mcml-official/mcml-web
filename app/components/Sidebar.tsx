"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "../lib/navigation";
import logo from "../images/mcml_color_h_detail.svg";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer lg:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="top-16 z-0 border-0" side="top" hideCloseButton>
        <VisuallyHidden>
          <SheetHeader className="h-0 p-0">
            <SheetTitle className="flex h-0 items-center gap-2">
              <Image
                src={logo}
                alt="MCML Group"
                className="h-full w-auto dark:hidden"
                priority
              />
            </SheetTitle>
          </SheetHeader>
        </VisuallyHidden>
        <ul className="flex flex-col py-2">
          {navigationItems.map((item) => (
            <motion.li
              key={item.href}
              className="w-full"
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                    size="lg"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
