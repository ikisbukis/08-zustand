import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {TanStackProvider} from "../components/TanStackProvider/TanStackProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Create and keep track of your notes",
};

interface RootLayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
      <body>    
        <TanStackProvider>
          <Header />
          {children} 
          {modal}      
          <Footer />
        </TanStackProvider>      
      </body> 
    </html>
  );
}
