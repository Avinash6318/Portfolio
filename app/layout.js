import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Avinash Muppidi | Full Stack Developer",
  description:
    "Full Stack Developer skilled in React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Redis, Tailwind CSS, and AI-powered web applications. Explore my projects including AI SaaS Platform, Hotel Booking System, and FeedsOut.",
  keywords: [
    "Avinash Muppidi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
    "AI SaaS",
    "Portfolio",
    "Software Engineer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} h-full antialiased leading-8 overflow-x-hidden scroll-smooth`}
    >
      <body className="dark:bg-dark-theme dark:text-white">{children}</body>
    </html>
  );
}
