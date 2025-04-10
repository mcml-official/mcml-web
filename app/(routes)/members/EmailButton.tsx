"use client";

import { Button } from "@/components/ui/button";
import { Mail, Copy } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface EmailButtonProps {
  email: string;
}

export function EmailButton({ email }: EmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, "_blank");
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="w-full cursor-pointer">
          <Mail className="mr-1 h-3 w-3" />
          Email
        </Button>
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
              <Mail className="mr-1 h-3 w-3" />
              Open Mail
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
