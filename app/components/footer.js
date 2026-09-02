import Image from "next/image";
import Link from "next/link";
import { Inter, Quicksand, Montserrat, Belleza } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
})

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],

})

export default function Footer(){

    return(
        <footer className="flex flex-col items-center justify-center p-12 gap-10">
            <h1 className={belleza.className + " text-2xl font-bold text-black text-center"}>Nuestras redes</h1>
            <div className={quicksand.className + " flex flex-row items-center justify-center gap-14"}>
                <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.instagram.com/mobilinovamuebles/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    className=""
                    aria-hidden
                    src="/img/instagram-brands.svg"
                    alt="intagram icon"
                    width={16}
                    height={16}
                />
                Instagram
                </Link>
                <Link     
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className=""
                        aria-hidden
                        src="/img/facebook-f-brands.svg"
                        alt="facebook icon"
                        width={10}
                        height={10}
                    />
                    Facebook
                </Link>
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:nahuh08@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className=""
                        aria-hidden
                        src="/img/envelope-solid.svg"
                        alt="envelope icon"
                        width={16}
                        height={16}
                    />
                    Email
                </Link>
            </div>
          
          </footer>
    )
}