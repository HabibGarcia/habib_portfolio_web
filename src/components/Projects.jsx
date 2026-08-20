import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('PRO_001');
  const activeProject = projectsData.find(p => p.id === activeTab);

  return (
    <section id="projects" className="py-10 px-4 max-w-5xl mx-auto mt-6 overflow-hidden md:overflow-visible transition-colors duration-500">
      
      {/* Título derecho */}
      <div className="flex justify-end mb-4 md:mb-2 md:pl-10">
          <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))]">
              <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
              <h3 className="text-xl md:text-3xl font-black text-textmain tracking-widest uppercase">Proyectos</h3>
          </div>
      </div>

      {/* PESTAÑA Y VENTANA */}
      <div>
        {/* Pestañas: overflow-x-auto permite deslizarlas en móvil sin romper el layout */}
        <div className="flex gap-2 mb-[-4px] relative z-10 md:pl-10 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`shrink-0 px-6 md:px-10 py-2 font-bold text-xs md:text-sm border-4 border-textmain rounded-t-lg border-b-0 transition-all ${
                activeTab === project.id
                  ? 'bg-primary text-white h-12 mt-0' 
                  : 'bg-primary/20 border-textmain/30 text-textsecondary hover:bg-primary h-10 mt-2 hover:text-white' 
              }`}
            >
              {project.id}
            </button>
          ))}
        </div>

        {/* Caja Principal de la Ventana */}
        <div className="border-4 border-textmain rounded-xl bg-background/80 p-0 relative z-0 shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] transition-colors duration-500">
          
          {/* Barra superior */}
          <div className="bg-primary border-b-4 rounded-t-lg border-textmain p-2 flex justify-end gap-2 px-4 transition-colors duration-500">
              <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
                 <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
          </div>

          {/* Contenido interior */}
          <div className="p-6 md:p-12 bg-transparent flex flex-col md:flex-row gap-8 md:gap-4 items-center">
             
             {/* Lado Izquierdo: Textos */}
             <div className="w-full md:w-3/5">
                <h3 className="text-3xl md:text-4xl font-black text-textmain mb-4 tracking-tight drop-shadow-sm transition-colors duration-500">{activeProject.title}</h3>
                <p className="text-textsecondary mb-8 text-base md:text-lg font-medium leading-relaxed transition-colors duration-500">
                  {activeProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                  {activeProject.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="font-mono text-xs md:text-sm font-bold tracking-widest mb-2 inline-block w-fit px-4 py-1 rounded-full border-2 border-secondary bg-secondary/5 text-secondary hover:bg-secondary hover:text-white hover:shadow-[0_0_8px_rgb(var(--color-secondary))] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               <Link 
                to={`/project/${activeProject.id}`} 
                className="bg-primary hover:bg-white text-white hover:text-secondary rounded-lg font-black text-lg py-3 px-6 shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all"
               >
                 Leer más
                </Link>
             </div>

             {/* Lado Derecho: Ilustración del Personaje */}
             <div className="hidden md:flex w-full md:w-2/5 flex justify-center items-center relative mt-4 md:mt-0">
                {/* Brillo detras del personaje */}
                <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-75"></div>
                
                <img 
                  src={activeProject.characterImg} 
                  alt="Personaje presentando el proyecto" 
                  className="w-2/3 md:w-full max-w-[250px] md:max-w-none h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Galería extra de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
        {activeProject.images.map((img, index) => (
          <div 
            key={index}
            className="border-4 border-textmain rounded-xl overflow-hidden bg-background shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all group cursor-pointer aspect-video relative"
          >
            {/* Imagen del proyecto */}
            <img 
              src={img} 
              alt={`Vista previa ${index + 1} de ${activeProject.title}`} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            {/* Overlay sutil adaptativo */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

    </section>
  );
}