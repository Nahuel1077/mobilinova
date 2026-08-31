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

export default function Placares(){

    const [current, setCurrent] = useState(null);

    const projects = [
        
        { 
            id: 2, 
            name: "Placard", 
            description: "Melamina blanca. Canto ABS 2mm.", 
            year: 2022, 
            img: "/img/placard/placard1.jpeg"
        },
        { 
            id: 3, 
            name: "Placard", 
            description: "Melamina blanca. Canto ABS 2mm.", 
            year: 2022, 
            img: "/img/placard/placard2.jpeg"
        },
        { 
            id: 4, 
            name: "Placard", 
            description: "Melamina Safari. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard3.jpeg"
        },
        { 
            id: 1, 
            name: "Placard", 
            description: "Melamina blanca y Teka Oslo. Canto ABS 2mm.", 
            year: 2021, 
            img: "/img/placard/placard4.jpeg"
        },
        { 
            id: 5, 
            name: "Placard", 
            description: "Melamina Teka Oslo. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard5.jpeg"
        },
        { 
            id: 7, 
            name: "Placard", 
            description: "Laqueado gris semi-mate.", 
            year: 2023, 
            img: "/img/placard/placard7.jpeg"
        },
        { 
            id: 8, 
            name: "Placard", 
            description: "Melamina Dakar. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard8.jpeg"
        },
        { 
            id: 9, 
            name: "Placard", 
            description: "Melamina Dakar. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard9.jpeg"
        },
        { 
            id: 10, 
            name: "Placard", 
            description: "Melamina Scotch. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard10.jpeg"
        },
        { 
            id: 15, 
            name: "Placard", 
            description: "Melamina Cerezo Locarno. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard16.jpeg"
        },        
        { 
            id: 16, 
            name: "Placard", 
            description: "Melamina Kiri. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard17.jpeg"
        },        
        { 
            id: 17, 
            name: "Placard", 
            description: "Melamina Paraiso. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard18.jpeg"
        },        
        { 
            id: 18, 
            name: "Placard", 
            description: "Melamina blanca. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard19.jpeg"
        },        
        { 
            id: 19, 
            name: "Placard", 
            description: "Melamina blanca. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard28.jpeg"
        },        
        { 
            id: 20, 
            name: "Placard", 
            description: "Melamina negra y laqueado negro. Canto ABS 2mm", 
            year: 2023, 
            img: "/img/placard/placard21.jpeg"
        },        
        { 
            id: 21, 
            name: "Placard", 
            description: "Melamina negra y laqueado negro. Canto ABS 2mm", 
            year: 2023, 
            img: "/img/placard/placard22.jpeg"
        },        
        { 
            id: 22, 
            name: "Placard", 
            description: "Melamina negra y laqueado negro. Canto ABS 2mm", 
            year: 2023, 
            img: "/img/placard/placard23.jpeg"
        }, 
        { 
            id: 11, 
            name: "Placard", 
            description: "Melamina negra y laqueado negro. Canto ABS 2mm", 
            year: 2023, 
            img: "/img/placard/placard11.jpg"
        },       
        { 
            id: 23, 
            name: "Placard", 
            description: "Melamina Hickory. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard24.jpeg"
        },        
        { 
            id: 24, 
            name: "Placard", 
            description: "Melamina Hickory. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/placard/placard25.jpeg"
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
            <h1 className={belleza.className + " text-4xl font-bold text-gray-800 text-center self-center p-8"}>Nuestros placares</h1>
            {current !== null && (
                    <div className="w-[100vw] h-[100vh] bg-[#00000086] fixed inset-0 overflow-hidden z-30">
                            <Image 
                                src={projects[current].img} 
                                alt={projects[current].name} 
                                fill
                                className="object-contain"
                                priority
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            
                            

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