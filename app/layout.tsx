import Link from "next/link";
import "../styles/globals.css";
import { Navbar } from './components/Navbar';
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // my = mt-6 and mb-6 (margin top, margin bottom)
    const header = (
      <header>
        <div className="text-center p-6 my-5 mx-30 rounded-lg text-customHeading">
          {/* <Image src="/four-leaf.png" width={40} height={40} className="mx-auto" alt="Drawing of four leaf clover"/> */}
          <Link href="/">
            <h1 className="text-base font-bold mt-4 hover:underline">lamb with a 🐝 </h1>
          </Link>
          {/* <p className="text-customSubtext">welcome // 歡迎 ~</p> */}
        </div>
      </header>
    );

    // const footer = (
    //   <footer>
    //     <div className="border-t border-dashed border-slate-400 mt-6 py-6 text-center text-customHeading">
    //       <p className="text-left">have a nice day :D</p>
    //     </div>
    //   </footer>
    // );

    return (
    <html className="min-h-screen bg-customBG">
        <head/>
        <body className="flex">
        <div className="pt-10">
          <div>
            {header}
          </div>
          <div className="nav">
            <Navbar/>
          </div>
        </div>
        <div className="ml-10 max-w-2xl pt-40 flex-grow">
          {children}
          {/* {footer} */}
        </div>
      </body>
    </html>
  );
}

  