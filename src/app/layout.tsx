import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const getJakarta = Plus_Jakarta_Sans({
  variable: "--font-plust-jakarta-sans",
  subsets: ["latin"],
  display:'swap'
});



export const metadata: Metadata = {
  title: "AirNavX",
  description: "Using Mixed reality and Ai techniques for modelling airport navigation system ",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  
  return (
    <html lang="en">
      <body
        className={`${getJakarta.variable} antialiased`}
      >
        <>

        {children}
        </>
      </body>
    </html>
  );
}
