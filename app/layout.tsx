import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { Geist } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "./components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "MCML Group - Yonsei University",
    template: "%s | MCML Group - Yonsei University",
  },
  description:
    "Multimedia Computing and Machine Learning (MCML) Group at Yonsei University, led by Professor Jong-Seok Lee (이종석). Research in multimedia processing, machine learning, and human-computer interaction.",
  keywords: [
    // Lab and University
    "MCML Group",
    "MCML Lab",
    "Yonsei University",
    "연세대학교",
    "연세대",
    "College of Computing",
    "School of Integrated Technology",
    "첨단융합공학부",
    "글로벌융합공학부",
    "글로벌융합공학과",
    "Department of Artificial Intelligence",
    "인공지능학과",
    "인공지능융합대학",

    // Professor
    "Jong-Seok Lee",
    "이종석",
    "Professor",
    "교수",

    // Research Areas
    "Multimedia Computing",
    "Machine Learning",
    "Artificial Intelligence",
    "Human-Computer Interaction",
    "멀티미디어 컴퓨팅",
    "머신러닝",
    "인공지능",
    "HCI",
    "인간컴퓨터상호작용",
    "멀티모달 딥러닝",
    "Explainable AI",
    "Responsible AI",
    "Efficient AI",
    "Brain-Computer Interfaces",
    "Dynamic Vision Sensors",
    "Multimodal Deep Learning",
    "Safe Image Generation",
    "Machine Unlearning",
    "Event Camera",
    "Learned Image Compression",
    "Knowledge Distillation",
    "Adversarial Robustness",
    "Aesthetic Assessment",
    "EEG-based Emotional Video Classification",

    // Lab Related
    "Research Lab",
    "Research Group",
    "연구실",
    "연구그룹",
    "대학원",
    "대학원생",
    "Graduate School",
    "Lab Members",
    "Publications",
    "Research",
    "논문",
    "연구",
  ],
  authors: [{ name: "Jong-Seok Lee", url: "https://mcml.yonsei.ac.kr" }],
  creator: "Jong-Seok Lee",
  publisher: "Yonsei University MCML Group",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://mcml.yonsei.ac.kr"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    title: "MCML Group - Yonsei University",
    description:
      "Multimedia Computing and Machine Learning (MCML) Group at Yonsei University",
    siteName: "MCML Group",
  },
  verification: {
    google: "m1b64rK-TQFjzUaXKvw45jFQdAX9Xpye5zeqWi7S5YM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} ${geist.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="h-16"></div>
          {children}
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-0TQVHSB01W" />
    </html>
  );
}
