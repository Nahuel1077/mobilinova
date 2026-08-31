import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mobilinova",
  description: "Fábrica de muebles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black flex flex-col overflow-x-hidden">
        <Nav />

        <main className="flex-1 mt-[120px]">
          {children}
        </main>

        <Footer />
        <Link href="https://api.whatsapp.com/send/?phone=5491155093520&text=Hola,%20te%20hablo%20desde%20el%20sitio%20web%20de%20Mobilinova&type=phone_number&app_absent=0" className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50">
          <Image
            src="/img/whatsapp.svg"
            alt="WhatsApp icon"
            width={20}
            height={20}
            className="invert"
          />
        </Link>
      </body>
    </html>
  );
}