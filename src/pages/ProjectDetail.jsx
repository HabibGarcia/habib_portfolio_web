import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  
  // Buscamos el proyecto exacto por su ID
  const project = projectsData.find(p => p.id === id);

  // Si el usuario introduce una URL falsa (ej. /project/PRO_999), lo devolvemos al Home
  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative min-h-screen font-sans bg-background">
      
      {/* =========================================
          FONDO DE REJILLA GLOBAL
          ========================================= */}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-12">
        
        {/* NAVEGACIÓN SUPERIOR: Botón de Volver */}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="group flex items-center gap-3 bg-[#1a1a1a] border-4 border-black px-6 py-2 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all w-fit"
          >
            <span className="text-primary font-black text-xl group-hover:-translate-x-2 transition-transform">{'<-'}</span>
            <span className="text-white font-bold tracking-widest uppercase text-sm">Volver al Dashboard</span>
          </Link>
          
          <span className="text-gray-500 font-mono font-bold tracking-widest">ID: {project.id}</span>
        </div>

        {/* CABECERA DEL PROYECTO */}
        <div className="flex flex-col md:flex-row gap-10 items-end justify-between border-b-4 border-gray-800 pb-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 border-2 border-primary text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Botones de Enlace (Solo se muestran si existen en tus datos) */}
          <div className="flex gap-4">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-300 text-black border-4 border-black rounded-lg font-black text-base py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
                GitHub Repo
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-primary hover:bg-[#EF4B4C] text-white border-4 border-black rounded-lg font-black text-base py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* ZONA DE ANÁLISIS TÉCNICO (Caja Estilo Ventana) */}
        <div className="border-4 border-black rounded-xl bg-[#121212] p-0 relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Barra de la Ventana */}
          <div className="bg-primary border-b-4 rounded-t-lg border-black p-2 flex justify-between items-center px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)] animate-pulse"></div>
              <span className="font-bold text-white text-sm tracking-wide">System_Analysis.md</span>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs">_</div>
              <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs">X</div>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">
            
            {/* Lado Izquierdo: Ilustración del personaje (Más grande para esta página) */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110"></div>
                <img 
                  src={project.characterImg} 
                  alt="Ilustración del Proyecto" 
                  className="w-full max-w-[300px] h-auto object-contain relative z-10 drop-shadow-[8px_8px_0_rgba(0,0,0,1)]"
                />
              </div>
            </div>

            {/* Lado Derecho: Textos Descriptivos */}
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              
              <div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight border-b-2 border-gray-800 pb-2 inline-block">01. Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#EF4B4C] mb-3 tracking-tight border-b-2 border-gray-800 pb-2 inline-block">02. Challenges & Solutions</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  {project.challenges || "Documentación de retos en progreso..."}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* GALERÍA DE PANTALLAS (Ampliada) */}
        <div>
          <h3 className="text-3xl font-black text-white tracking-widest uppercase mb-8 mt-10">Interface Preview</h3>
          
          {/* Mostramos las 3 imágenes en un formato tipo "masonry" o cuadrícula asimétrica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Imagen Principal (Ocupa dos columnas si es escritorio) */}
            <div className="md:col-span-2 border-4 border-black rounded-xl overflow-hidden bg-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img src={project.images[0]} alt="Vista Principal" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Imagen 2 */}
            <div className="border-4 border-black rounded-xl overflow-hidden bg-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img src={project.images[1]} alt="Vista Secundaria" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Imagen 3 */}
            <div className="border-4 border-black rounded-xl overflow-hidden bg-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img src={project.images[2]} alt="Detalle" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

          </div>
        </div>
        
        {/* Footer interno para la página de detalle */}
        <div className="mt-20 border-t-2 border-gray-800/80 pt-8 pb-10 text-center">
           <p className="text-gray-500 font-mono text-sm font-bold">
             © {new Date().getFullYear()} Habib. {project.title} Project.
           </p>
        </div>

      </div>
    </div>
  );
}