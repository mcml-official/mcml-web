"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface EmailButtonProps {
  email: string;
}

export function EmailButton({ email }: EmailButtonProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full"
      onClick={handleEmailClick}
    >
      <Mail className="mr-1 h-3 w-3" />
      Email
    </Button>
  );
}
