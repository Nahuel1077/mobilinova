'use client'
import { useState } from "react";
import Image from "next/image";
import { Inter, Quicksand, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
})

export default function Galeria(){

    const [current, setCurrent] = useState(0);

    const projects = [
        { 
            id: 0, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm.", 
            year: 2021, 
            img: "/img/cocina/cocina1.jpeg" 
        },
        { 
            id: 1, 
            name: "Placard", 
            description: "Melamina blanca y Teka Oslo. Canto ABS 2mm.", 
            year: 2021, 
            img: "/img/placard/placard4.jpeg"
        },
        { 
            id: 2, 
            name: "Baño", 
            description: "Melamina Scotch. Canto ABS 2mm.", 
            year: 2022, 
            img: "/img/medida/baño7.jpeg"
        },
        { 
            id: 3, 
            name: "Mueble de TV", 
            description: "Descripción detallada del proyecto.", 
            year: 2023, 
            img: "/img/medida/especial19.jpeg"
        },
        { 
            id: 4, 
            name: "Recepción", 
            description: "Melamina Nogal Terracota. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/especial1.jpeg"
        },
        { 
            id: 5, 
            name: "Revestimiento", 
            description: "Melamina Teka Oslo. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/especial18.jpeg"
        },
        { 
            id: 6, 
            name: "Puerta de oficina", 
            description: "Descripción detallada del proyecto", 
            year: 2023, 
            img: "/img/medida/especial3.jpg"
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

    return(
        
        <div className="flex flex-col gap-8">
            <div className="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
                    <Image 
                        src={projects[current].img} 
                        alt={projects[current].name} 
                        fill
                        className="object-contain"
                        priority
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        </div>
    )
}