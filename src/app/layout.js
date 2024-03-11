import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkillUpgrade",
  description: "Upgrade your skills with us",
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{
          fontFamily: "Cambria, Georgia, serif"
        }}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
