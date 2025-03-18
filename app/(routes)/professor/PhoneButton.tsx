"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Copy, Phone } from "lucide-react";
import { useState } from "react";

export function PhoneButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("+82-32-749-5846");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:+82-32-749-5846`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <p className="inline-flex cursor-pointer items-center text-blue-500 transition-colors hover:text-blue-600">
          <Phone className="mr-1 h-4 w-4" /> Phone
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 cursor-pointer"
              onClick={handleCopyClick}
            >
              <Copy className="mr-1 h-3 w-3" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 cursor-pointer"
              onClick={handleEmailClick}
            >
              <Phone className="mr-1 h-3 w-3" />
              Call
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
