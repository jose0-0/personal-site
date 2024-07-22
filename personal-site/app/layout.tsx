import type { Metadata } from "next";
import { Footer, Contact, Nav, Services, Work } from '@/components'
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: "JoseLikesCode.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body 
        className={jetbrainsMono.className}
      >
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
