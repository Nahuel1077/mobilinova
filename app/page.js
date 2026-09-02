'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

export default function Home() {
  const [current, setCurrent] = useState(0);

  const categories = [
    {id:1, name:"Cocina", image:"/img/cocina/cocina1.jpeg", link:"/cocinas"},
    {id:2, name:"Placares", image:"/img/placard/placard1.jpeg", link:"/placares"},
    {id:3, name:"A medida", image:"/img/medida/especial1.jpeg", link:"/especiales"}
  ];

  
  const projects = [
    { 
      id: 0, 
      name: "Cocina", 
      description: "Laqueado blanco semi-mate. Mesada madera hidrolaqueado.", 
      year: 2021, 
      img: "/img/cocina/cocina5.jpeg" 
    },
    { 
      id: 1, 
      name: "Placard", 
      description: "Melamina blanca y Teka Oslo. Canto ABS 2mm.", 
      year: 2021, 
      img: "/img/placard/placard21.jpeg"
    },
    { 
      id: 2, 
      name: "Baño", 
      description: "Melamina Scotch. Canto ABS 2mm. Mesada filestone blanco norte.", 
      year: 2022, 
      img: "/img/medida/baño7.jpeg"
    },
    { 
      id: 3, 
      name: "Mueble de TV", 
      description: "Laqueado negro semi-mate y madera.", 
      year: 2023, 
      img: "/img/medida/especial19.jpeg"
    },
    { 
      id: 4, 
      name: "Recepción", 
      description: "Enchapado en wengue con base laqueado blanco semi-mate.", 
      year: 2023, 
      img: "/img/medida/especial8.jpg"
    },
    { 
      id: 5, 
      name: "Revestimiento", 
      description: "Melamina Scotch. Canto ABS 2mm.", 
      year: 2023, 
      img: "/img/medida/especial16.jpeg"
    },
    { 
      id: 6, 
      name: "Revestimiento", 
      description: "Laqueado blanco semi-mate", 
      year: 2023, 
      img: "/img/medida/especial22.jpeg"
    },
  ];
  
  const goToProject = (index) => {
    setCurrent(index);
  };
  
  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      {/*Hero Section*/}
      <div className="flex flex-col items-center justify-center py-8 sm:pr-8 bg-[#8b705391] w-full">
        <div className="self-start flex flex-col items-center justify-center w-full lg:w-1/2">
          <Image
            className="object-cover blur-[2px] hover:blur-none transition duration-300 ease-in-out z-20 lg:self-start self-center select-none drag-none"
            src="/img/hero.png"
            alt="Cocina 1"
            width={400}
            height={200}
            priority
            onGotPointerCapture={(e) => e.target.style.filter = "blur(0px)"}
          />
          <div className="w-1/2 h-[350px] hidden lg:block absolute bg-[#655039] rounded-3xl rounded-l-none z-10 self-start"></div>
          <h1 className={montserrat.className + " font-bold absolute text-3xl xl:text-6xl z-30 text-white lg:self-end self-center text-center lg:pr-10"}>Muebles a medida<br/>100% personalizados</h1>
        </div>
        <div className="relative lg:absolute text-xl sm:text-3xl z-30 text-white text-center self-center lg:self-end gap-10 flex flex-col items-center justify-center">
          <div className="flex-col items-end gap-10 xl:flex hidden">
            <span className="h-[2px] w-[450px] self-end bg-black absolute -z-10"></span>
            <span className="h-[2px] w-[400px] self-end bg-black absolute mt-[80px] -z-10"></span>
            <span className="h-[2px] w-[350px] self-end bg-black absolute mt-[160px] -z-10"></span>
          </div>
          <Image
          src="/img/presupuesto.png"
          height={450}
          width={450}
          alt="Presupuesto"
          className="rotate-x-30 rotate-z-10 absolute -z-10 shadow-[black_0px_5px_10px_0px] blur-[1px] select-none drag-none lg:block hidden"
          />
          <h1 className={montserrat.className +  " text-white lg:text-black xl:text-6xl font-bold"}>Asesoramiento y <br/> cotización gratuitos</h1>
          <Link href="https://calendly.com/nahuh08/30min" className={quicksand.className + " bg-black text-xl shadow-xl shadow-black hover:shadow-lg rounded-xl p-4 text-white"}>Agenda tu consulta!</Link>
        </div>
      </div>
      {/*Gallery Section*/}
      <div className="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
        <Image 
          src={projects[current].img} 
          alt={projects[current].name} 
          width={1400}
          height={800}
          className="object-top md:w-[100vw] md:h-[100vh] self-center md:object-scale-down"
          priority
        />                    
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"/>                  
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className={`${quicksand.className} max-w-3xl`}>
              <span className="text-2xl font-light tracking-widest italic">
                {projects[current].year}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4">
                {projects[current].name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
                {projects[current].description}
              </p>
            </div>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black text-3xl w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black text-3xl w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
          >
            →
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => goToProject(index)}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 ${current === index ? 'ring-4 ring-blue-600' : ''}`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <span className="italic text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-3 text-sm italic">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      {/*Categories Section*/}
      <div className="flex flex-col items-center justify-center gap-4 p-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {categories.map((category) => (
            <Link href={category.link} key={category.id} className="bg-[#8b705391] p-4 rounded-3xl">
              <Image
                className="w-[400px] h-[300px] object-contain sm:blur-[2px] sm:hover:blur-none transition duration-300 ease-in-out z-20 lg:self-start self-center select-none drag-none"
                src={category.image}
                alt={category.name}
                width={400}
                height={200}
                priority
              />
              <h2 className={montserrat.className + " text-xl text-white text-center mt-4"}>{category.name}</h2>
            </Link>
          ))}

        </div>
      </div>
      {/*Us Section*/}
      <div className="w-full flex flex-col items-center justify-center py-6 bg-[#8b705391] lg:bg-white m-8">
          <div className={quicksand.className + " w-full h-[300px] flex flex-col items-center justify-center gap-4 lg:bg-[#8b705391] px-4 z-10"}>
            <h2 className="text-2xl font-bold text-white">¿Quiénes somos?</h2>
            <p className="text-white text-justify p-2 max-w-[400px]">Somos una empresa dedicada a la fabricación de muebles a medida, con más de 30 años de experiencia en el rubro. Nos especializamos en cocinas, placares y muebles especiales, ofreciendo asesoramiento y cotización gratuitos.<br/> Muebles diseñados por profesionales en el rubro.</p>
          </div>
          <div className={quicksand.className + " w-full flex flex-col items-center justify-center gap-4 lg:bg-[#8b705391] p-4 z-10"}>
            <h2 className="text-2xl font-bold text-white">¿Dónde trabajamos?</h2>
            <p className="text-white text-justify p-2 max-w-[400px]">Trabajamos en toda la región AMBA, con sucursales en Monte Grande.</p>
            <Image
              src="/img/amba.png"
              alt="Zonas que trabajamos"
              width={400}
              height={200}
            />
          </div>

      </div>
    </div>
  );
}
