import type { Metadata } from "next";
import { Contact, Nav, Services, Work } from '@/components'
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
    <html lang="en">
      <body 
        className={jetbrainsMono.className}
      >
        <Nav/>
        {children}
        <div className='mb-8 xl:mb-0'>
          <Services/>
        </div>
        {/* <div className='mb-8 xl:mb-0'>
          <Work/>
        </div> */}
        <div className='mb-8 xl:mb-0'>
          <Contact/>
        </div>
        </body>
    </html>
  );
}
