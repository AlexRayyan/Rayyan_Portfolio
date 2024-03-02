import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rayyan",
  description: "Game developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} w-full flex min-h-screen`}>
        <aside className=" fixed left-0 top-0 w-[15%] h-screen shadow-md">
          <Sidebar />
        </aside>
        <main className=" w-[85%] ml-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
}
