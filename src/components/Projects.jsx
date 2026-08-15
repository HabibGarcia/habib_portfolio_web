import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('PRO_001');
  const activeProject = projectsData.find(p => p.id === activeTab);

  return (
    <section id="projects" className="py-10 px-4 max-w-5xl mx-auto mt-10">
      
      {/*Título derecho*/}
      <div className="flex justify-end mb-2 pl-10">
        <div className="flex items-center gap-4 border-2 border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase">Projects</h3>
        </div>
      </div>

      {/*PESTAÑA Y VENTANA */}
      <div>
        {/* Pestañas */}
        <div className="flex gap-0 mb-[-4px] relative z-10 pl-10 gap-x-2">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-10 py-2 font-bold text-sm border-4 border-black rounded-t-lg border-b-0 transition-all ${
                activeTab === project.id
                  ? 'bg-primary text-white h-12 mt-0' 
                  : 'bg-primary/20 text-gray-300 hover:bg-primary h-10 mt-2 hover:text-white' 
              }`}
            >
              {project.id}
            </button>
          ))}
        </div>

        {/* Caja Principal de la Ventana */}
        <div className="border-4 border-black rounded-xl bg-background/80 p-0 relative z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Barra superior */}
          <div className="bg-primary border-b-4 rounded-t-lg border-black p-2 flex justify-end gap-2 px-4">
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
          </div>

          {/* Contenido interior */}
          <div className="p-8 md:p-12 bg-transparent flex flex-col md:flex-row gap-4 items-center">
             
             {/* Lado Izquierdo: Textos */}
             <div className="w-full md:w-3/5">
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{activeProject.title}</h3>
                <p className="text-gray-300 mb-8 text-lg font-medium leading-relaxed">
                  {activeProject.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {activeProject.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="font-mono text-sm font-bold tracking-widest mb-2 inline-block w-fit px-3 py-1 rounded-md border border-gray-700 bg-black text-secondary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-[2px] hover:-translate-x-[2px] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               <Link 
                to={`/project/${activeProject.id}`} className="bg-primary hover:bg-white text-white hover:text-black border-2 border-transparent hover:border-black rounded-lg font-black text-lg py-3 px-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                  Read more
                </Link>
             </div>

             {/* Lado Derecho: Ilustración del Personaje */}
             <div className="w-full md:w-2/5 flex justify-center items-center relative">
                {/* Brillo detras del personaje */}
                <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-75"></div>
                
                <img 
                  src={activeProject.characterImg} 
                  alt="Personaje presentando el proyecto" 
                  className="w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300"
                />
             </div>
          </div>
        </div>
      </div>

      {/* extra img*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
        {activeProject.images.map((img, index) => (
          <div 
            key={index}
            className="border-4 border-black rounded-xl overflow-hidden bg-background/80 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] transition-all group cursor-pointer aspect-video relative"
          >
            {/* Imagen del proyecto */}
            <img 
              src={img} 
              alt={`Preview ${index + 1} de ${activeProject.title}`} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            {/* Overlay sutil para dar estilo retro */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>

    </section>
  );
}