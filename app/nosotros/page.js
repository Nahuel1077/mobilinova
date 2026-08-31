import Link from "next/link";
import Image from "next/image";
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

export default function Nosotros(){


    return(
        <div className="flex flex-col items-center justify-center lg:py-8 bg-white w-full gap-8 ">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 w-full h-[515px] flex flex-col items-center bg-[#8b705391] lg:rounded-xl lg:rounded-l-none">
                    <Image
                    height={400}
                    width={400}
                    alt="Nosotros"
                    src="/img/nosotrospng.png"
                    className="absolute self-end brightness-125"
                    />
                    <div className={quicksand.className + " text-start p-8 z-10 h-full flex flex-col justify-end lg:justify-start gap-2 lg:gap-16 text-white bg-[#00000080] lg:rounded-xl lg:rounded-l-none"}>
                        <h1 className="xl:text-6xl text-3xl italic">
                            Nuestra historia
                        </h1>
                        <p className="lg:w-1/2">Somos una fábrica de muebles <strong>personalizados</strong> que nació hace más de <strong>30 años</strong>. Diseñamos y fabricamos de forma personalizada para cada proyecto, de manera que logremos cumplir todas las expectativas.<br/> Garantizamos materiales de calidad, variedad de herrajes, y múltiples opciones de formatos de placas. <br/> Nuestro taller se encuentra en la ciudad de <strong>Monte Grande</strong>, y realizamos trabajos en todo <strong>AMBA</strong>.</p>

                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-[515px] flex flex-col items-center">
                    <div className={quicksand.className + " xl:text-end items-start xl:items-end p-8 z-10 h-full flex flex-col justify-end lg:justify-start gap-2 lg:gap-16 text-black"}>
                        <h1 className="xl:text-6xl text-3xl italic">
                            Por qué elegirnos
                        </h1>
                        <p className="lg:w-1/2">Con una experiencia de más de 30 años, conocemos del rubro, estamos al tanto de las <strong>innovaciones</strong>, y también contamos con una variedad de <strong>máquinas especializadas</strong> que mejoran el rendimiento industrial.<br/>Nuestros muebles son <strong>100% a medida</strong> y de <strong>producción propia</strong>, garantizando atención personalizada y acompañamiento durante todo el proyecto. No solo trabajamos <strong>proyectos residenciales</strong>, sino que también trabajamos <strong>proyectos de gran escala</strong>.</p>
                        <h3 className="text-3xl">¡Consultanos!</h3>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row w-full flex-col-reverse">
                <div className="lg:w-1/2 w-full h-[510px] flex flex-col items-center">
                    <div className={quicksand.className + " text-start p-8 h-full flex flex-col justify-start lg:justify-start gap-2 lg:gap-16 text-blac"}>
                        <h1 className="xl:text-6xl text-3xl italic">
                            Dónde nos ubicamos
                        </h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70898.3887521699!2d-58.507227616163185!3d-34.82146839378428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3e18e4d9a6f%3A0x407e26fe63f27667!2sMonte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses!2sar!4v1788212984494!5m2!1ses!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="w-[90vw] lg:w-full"></iframe>

                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-[515px] flex flex-col justify-center items-center bg-[#8b705391] lg:rounded-xl lg:rounded-r-none">
                    <Image
                    height={400}
                    width={400}
                    alt="Nosotros"
                    src="/img/nosotrospng2.png"
                    className="absolute justify-self-center lg:self-end lg:w-1/2 brightness-125"
                    />
                    <div className={quicksand.className + " lg:text-end p-8 z-10 h-full flex flex-col justify-end lg:justify-start gap-2 lg:gap-16 text-white bg-[#00000080] lg:rounded-xl lg:rounded-r-none"}>
                        <h1 className="xl:text-6xl text-3xl italic">
                            Cómo trabajamos
                        </h1>
                        <p className="lg:w-1/2 text-start lg:text-end self-start lg:self-end">Primeramente, prestamos especial atención a la <strong>necesidad</strong> y al <strong>espacio</strong> disponible. Ideamos la mejor solución <strong>estética</strong> y a <strong>medida</strong>, teniendo en cuenta la arquitectura, uso y necesidades. <br/>El renderizado está a cargo de nuestro <strong>arquitecto</strong> especializado en diseño inmobiliario, por lo que garantizamos <strong>eficiencia y atención al detalle</strong> a lo largo de todo el proyecto. <br/><strong>El proceso</strong>: Diseño, Fabricación e Instalación. Acompañamos desde el comienzo del diseño hasta la entrega final y colocación.</p>

                    </div>
                </div>
                    
            </div>
        </div>
    )
}