import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])


import {  Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const lexendFort = Lexend({
  subsets: ["latin"],
});


export const metadata = {
  title: "Skill Sphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${lexendFort.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
