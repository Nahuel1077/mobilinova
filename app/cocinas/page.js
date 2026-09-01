'use client'
import { useState } from "react";
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

export default function Cocinas(){

    const [current, setCurrent] = useState(null);

    const projects = [
        
        { 
            id: 0, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada granito gris Mara.", 
            year: 2022, 
            img: "/img/cocina/cocina2.jpeg"
        },
        { 
            id: 1, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada madera hidrolaqueado.", 
            year: 2023, 
            img: "/img/cocina/cocina6.jpeg"
        },
        { 
            id: 2, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada madera hidrolaqueado.", 
            year: 2021, 
            img: "/img/cocina/cocina1.jpeg"
        },
        { 
            id: 3, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada madera hidrolaqueado.", 
            year: 2023, 
            img: "/img/cocina/cocina5.jpeg"
        },
        { 
            id: 4, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina4.jpeg"
        },
        { 
            id: 5, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina7.jpeg"
        },
        { 
            id: 6, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina8.jpeg"
        },
        { 
            id: 7, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina28.jpeg"
        },
        { 
            id: 8, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina29.jpeg"
        },
        { 
            id: 9, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada granito negro boreal.", 
            year: 2023, 
            img: "/img/cocina/cocina10.jpeg"
        },
        { 
            id: 10, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina12.jpeg"
        },
        { 
            id: 11, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina14.jpeg"
        },
        { 
            id: 12, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina15.jpeg"
        },
        { 
            id: 13, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Puertas vidrio blanco.", 
            year: 2023, 
            img: "/img/cocina/cocina16.jpeg"
        },
        { 
            id: 14, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina17.jpeg"
        },
        { 
            id: 15, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Puertas vidrio blanco. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina18.jpeg"
        },
        { 
            id: 16, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Puertas vidrio blanco. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina23.jpeg"
        },
        { 
            id: 17, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Puertas vidrio blanco. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina24.jpeg"
        },
        {
            id: 18, 
            name: "Cocina", 
            description: "Laqueado blanco brillante. Puertas vidrio blanco. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina25.jpeg"
        },
        { 
            id: 19, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Alacena vidrio. Mesada filestone blanco norte.", 
            year: 2021, 
            img: "/img/cocina/cocina30.jpeg" 
        },
        { 
            id: 20, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Alacena vidrio. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina19.jpeg"
        },
        { 
            id: 21, 
            name: "Cocina", 
            description: "Laqueado blanco semi-mate. Alacena vidrio. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina20.jpeg"
        },
        { 
            id: 22, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada negro Brasil.", 
            year: 2023, 
            img: "/img/cocina/cocina21.jpeg"
        },
        { 
            id: 23, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada granito negro boreal.", 
            year: 2023, 
            img: "/img/cocina/cocina26.jpeg"
        },
        { 
            id: 24, 
            name: "Cocina", 
            description: "Melamina Báltico. Canto ABS 2mm. Mesada filestone blanco norte. Puerta alacena vidrio negro.", 
            year: 2023, 
            img: "/img/cocina/cocina31.jpeg"
        },
        { 
            id: 25, 
            name: "Cocina", 
            description: "Melamina Báltico. Canto ABS 2mm. Mesada filestone blanco norte. Puerta alacena vidrio negro.", 
            year: 2023, 
            img: "/img/cocina/cocina32.jpeg"
        },
        { 
            id: 26, 
            name: "Cocina", 
            description: "Melamina Olmo Finlandés. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina33.jpeg"
        },
        { 
            id: 27, 
            name: "Cocina", 
            description: "Melamina Olmo Finlandés. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/cocina/cocina34.jpeg"
        },
        { 
            id: 28, 
            name: "Cocina", 
            description: "Melamina Teka Oslo. Canto ABS 2mm. Mesada negro Brasil.", 
            year: 2023, 
            img: "/img/cocina/cocina35.jpeg"
        },
        { 
            id: 29, 
            name: "Cocina", 
            description: "Melamina Teka Oslo. Canto ABS 2mm. Mesada negro Brasil.", 
            year: 2023, 
            img: "/img/cocina/cocina36.jpeg"
        },
        { 
            id: 30, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada negro Brasil. Puerta vidrio negro.", 
            year: 2023, 
            img: "/img/cocina/cocina37.jpeg"
        },
        { 
            id: 31, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada negro Brasil. Puerta vidrio negro.", 
            year: 2023, 
            img: "/img/cocina/cocina38.jpeg"
        },
        { 
            id: 32, 
            name: "Cocina", 
            description: "Melamina blanca. Canto ABS 2mm. Mesada negro Brasil. Puerta vidrio negro.", 
            year: 2023, 
            img: "/img/cocina/cocina39.jpeg"
        },
        { 
            id: 33, 
            name: "Cocina", 
            description: "Melamina Moscú. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina40.jpeg"
        },
        { 
            id: 34, 
            name: "Cocina", 
            description: "Melamina Moscú. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina41.jpeg"
        },
        { 
            id: 35, 
            name: "Cocina", 
            description: "Melamina Scotch. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina42.jpeg"
        },
        { 
            id: 36, 
            name: "Cocina", 
            description: "Melamina Scotch. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/cocina/cocina43.jpeg"
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
            <h1 className={belleza.className + " text-4xl font-bold text-gray-800 text-center self-center p-8"}>Nuestras cocinas</h1>
            {current !== null && (
                    <div className="w-[100vw] h-[100vh] bg-[#000000ab] fixed inset-0 overflow-hidden z-30">
                            <Image 
                                src={projects[current].img} 
                                alt={projects[current].name} 
                                fill
                                className="object-contain"
                                priority
                            />
                            
                            <div className="absolute inset-0"/>
                            
                            

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
                            <button
                                onClick={() => setCurrent(null)}
                                className="absolute top-36 right-6 bg-white/80 hover:bg-white text-black text-3xl w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
                            >
                                ✕

                            </button>
                        </div>

                )
            }
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
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