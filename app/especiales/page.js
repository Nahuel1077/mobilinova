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

export default function Especiales(){

    const [current, setCurrent] = useState(null);

    const projects = [
        
        { 
            id: 2, 
            name: "Recepción", 
            description: "Melamina Nogal Terracota. Canto ABS 2mm.", 
            year: 2022, 
            img: "/img/medida/especial1.jpeg"
        },
        { 
            id: 3, 
            name: "Puerta corrediza de oficina", 
            description: "Enchapado en madera, lustrado.", 
            year: 2022, 
            img: "/img/medida/especial2.jpg"
        },
        { 
            id: 4, 
            name: "Puerta corrediza de oficina", 
            description: "Enchapado en madera, lustrado.", 
            year: 2023, 
            img: "/img/medida/especial3.jpg"
        },
        { 
            id: 5, 
            name: "Mueble de TV", 
            description: "Enchapado en madera, lustrado.", 
            year: 2023, 
            img: "/img/medida/especial5.jpg"
        },
        { 
            id: 6, 
            name: "Mueble de TV", 
            description: "Mobiliario laqueado blanco semi-mate. Enchapado wengue, lustrado.", 
            year: 2023, 
            img: "/img/medida/especial6.jpg"
        },
        { 
            id: 8, 
            name: "Recepción", 
            description: "Mobiliario laqueado blanco semi-mate. Enchapado wengue, lustrado.", 
            year: 2023, 
            img: "/img/medida/especial8.jpg"
        },
        { 
            id: 9, 
            name: "Isla", 
            description: "Laqueado blanco brillante. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/especial9.jpeg"
        },
        { 
            id: 10, 
            name: "Mueble de TV", 
            description: "Melamina blanca y negra.", 
            year: 2023, 
            img: "/img/medida/especial10.jpg"
        },
        { 
            id: 12, 
            name: "Mesas de luz y respaldo", 
            description: "Laqueado blanco semi-mate.", 
            year: 2023, 
            img: "/img/medida/especial12.jpg"
        },
        { 
            id: 14, 
            name: "Cuna", 
            description: "Laqueado blanco semi-mate.", 
            year: 2010, 
            img: "/img/medida/especial14.jpg"
        },
        { 
            id: 15, 
            name: "Muebles de bar", 
            description: "Laqueado color semi-mate.", 
            year: 2023, 
            img: "/img/medida/especial15.jpg"
        },        
        { 
            id: 16, 
            name: "Revestimiento y recepción", 
            description: "Melamina Scotch. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/especial16.jpeg"
        },        
        { 
            id: 17, 
            name: "Revestimiento", 
            description: "Melamina Teka Oslo. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/especial17.jpeg"
        },        
        { 
            id: 18, 
            name: "Revestimiento", 
            description: "Melamina Teka Oslo. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/especial18.jpeg"
        },        
        { 
            id: 19, 
            name: "Mueble de TV", 
            description: "Laqueado negro semi-mate y madera.", 
            year: 2023, 
            img: "/img/medida/especial19.jpeg"
        },        
        { 
            id: 20, 
            name: "Mueble de TV", 
            description: "Laqueado negro semi-mate y madera.", 
            year: 2023, 
            img: "/img/medida/especial20.jpeg"
        },        
        { 
            id: 21, 
            name: "Bajo escaleras", 
            description: "Melamina blanca.", 
            year: 2023, 
            img: "/img/medida/especial21.jpeg"
        },        
        { 
            id: 22, 
            name: "Revestimiento", 
            description: "Laqueado blanco semi-mate.", 
            year: 2023, 
            img: "/img/medida/especial22.jpeg"
        },        
        { 
            id: 23, 
            name: "Isla", 
            description: "Laqueado blanco semi-mate. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/especial23.jpeg"
        },        
        { 
            id: 24, 
            name: "Mueble Rack", 
            description: "Melamina.", 
            year: 2023, 
            img: "/img/medida/especial25.jpeg"
        },        
        { 
            id: 25, 
            name: "Baño", 
            description: "Melamina Moscú. Canto ABS 2mm. Mesada negro Brasil.", 
            year: 2023, 
            img: "/img/medida/baño0.jpeg"
        },        
        { 
            id: 26, 
            name: "Baño", 
            description: "Melamina Moscú. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/baño1.jpeg"
        },        
        { 
            id: 27, 
            name: "Baño", 
            description: "Melamina Moscú. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/baño2.jpeg"
        },        
        { 
            id: 28, 
            name: "Baño", 
            description: "Melamina Praga. Canto ABS 2mm. Mesada filestone gris Texpo.", 
            year: 2023, 
            img: "/img/medida/baño3.jpeg"
        },        
        { 
            id: 29, 
            name: "Baño", 
            description: "Melamina Praga. Canto ABS 2mm. Mesada filestone gris Texpo.", 
            year: 2023, 
            img: "/img/medida/baño4.jpeg"
        },        
        { 
            id: 30, 
            name: "Baño", 
            description: "Laqueado negro semi-mate. Canto ABS 2mm.", 
            year: 2023, 
            img: "/img/medida/baño5.jpeg"
        },        
        { 
            id: 31, 
            name: "Baño", 
            description: "Melamina Scotch. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/baño6.jpeg"
        },        
        { 
            id: 32, 
            name: "Baño", 
            description: "Melamina Scotch. Canto ABS 2mm. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/baño7.jpeg"
        },        
        { 
            id: 33, 
            name: "Baño", 
            description: "Melamina Nogal Natural. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/baño8.jpg"
        },        
        { 
            id: 11, 
            name: "Proyecto 1", 
            description: "Melamina Nogal Natural. Mesada filestone blanco norte.", 
            year: 2023, 
            img: "/img/medida/baño9.jpg"
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
            <h1 className={belleza.className + " text-4xl font-bold text-gray-800 text-center self-center p-8"}>Nuestros muebles personalizados</h1>
            {current !== null && (
                    <div className="w-[100vw] h-[100vh] bg-[#000000ab] fixed inset-0 overflow-hidden z-30">
                            <Image 
                                src={projects[current].img} 
                                alt={projects[current].name} 
                                fill
                                className="object-contain"
                                priority
                            />
                            
                            <div className="absolute inset-0" />
                            
                            

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