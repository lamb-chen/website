import Link from "next/link";
import "../styles/globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // my = mt-6 and mb-6 (margin top, margin bottom)
    const header = (
      <header>
        <div className="text-center p-6 my-5 mx-30 rounded-lg bg-yellow-50">
          {/* <Image src="/four-leaf.png" width={40} height={40} className="mx-auto" alt="Drawing of four leaf clover"/> */}
          <Link href="/">
            <h1 className="text-2xl text-yellow-900 font-bold mt-4 ">lamb with a 🐝</h1>
          </Link>
          <p className="text-yellow-600">enjoy your stay // 歡迎 ~</p>
        </div>
      </header>
    );

    const footer = (
      <footer>
        <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-300">
          <p className="text-left">Wanna connect?</p>
          <ul className="text-left">
            <li><Link href="https://github.com/lamb-chen"><p>Github 🐙</p></Link></li>
            <li><Link href="https://www.linkedin.com/in/lambchen/"><p>Linkedin 👤</p></Link></li>
            
          </ul>
        </div>
      </footer>
    );

    return (
    <html className="min-h-screen bg-yellow-200">
        <head/>
        <body>
          <div className="mx-auto max-w-2xl px-6">
            {header}
            {children}
            {footer}
          </div>
        </body>
    </html>
  );
}

  