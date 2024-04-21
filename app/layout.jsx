import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rayyan",
  description: "Game developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} w-full flex flex-col`}>
        <nav className="mx-auto hidden lg:block mt-3 fixed top-3 left-5 right-5">
          <Navbar />
        </nav>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
