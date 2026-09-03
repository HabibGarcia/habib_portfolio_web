import { useParams, Link, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { id } = useParams();
  const [zoomedImage, setZoomedImage] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Buscamos por id
  const project = projectsData.find(p => p.id === id);

  // Control de errores
  if (!project) {
    return <Navigate to="/" />;
  }

  // Función para formatear texto de terminal (`)
  const formatTerminalText = (text) => {
    if (!text) return null;
    const parts = text.split('`');
    return parts.map((part, index) => {
      if (index % 2 !== 0) {
        return (
          <span 
            key={index} 
            className="font-mono text-xs md:text-sm bg-background border-2 border-darker text-secondary px-2 py-0.5 mx-1 rounded-md shadow-[2px_2px_0_0_rgb(var(--color-darker))] font-bold"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };
  return (
    <div className="relative min-h-screen font-sans bg-background transition-colors duration-500">
      
      {/* fondo cp Home.jsx*/}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,rgb(var(--text-color)/0.15)_2px,transparent_1px),linear-gradient(to_bottom,rgb(var(--text-color)/0.15)_2px,transparent_1px)] bg-[size:40px_40px] transition-colors duration-500"></div>

      <Navbar />
      {/*contenido Principal*/}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-12">
        {/* bttn back*/}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="hidden md:flex w-10 h-10 rounded-lg bg-darker items-center justify-center hover:bg-white text-white hover:text-secondary shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all gap-2"
            aria-label="Volver al Dashboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-secondary group-hover:-translate-x-1 transition-transform">
               <line x1="19" y1="12" x2="5" y2="12"></line>
               <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
          
          {/* Diseño mejorado del ID del proyecto */}
          <div className="hidden md:flex w-60 h-10 rounded-lg bg-primary items-center justify-center font-bold hover:bg-white text-white hover:text-secondary shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all gap-2">
            ID: {project.id}
          </div>
        </div>

        {/* CABECERA DEL PROYECTO */}
        <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between pb-10 transition-colors duration-500">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-textmain tracking-tight mb-6 transition-colors duration-500">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="font-mono text-xs md:text-sm font-bold tracking-widest mb-2 inline-block w-fit px-4 py-1 rounded-full border-2 border-secondary bg-secondary/5 text-secondary hover:bg-secondary hover:text-white hover:shadow-[0_0_8px_rgb(var(--color-secondary))] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Botones de Enlace Condicionales */}
          <div className="flex gap-4 items-center justify-center">
              {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex w-40 h-10 rounded-lg bg-darker items-center justify-center font-bold hover:bg-white text-white hover:text-secondary shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all gap-2">
                Repo GitHub
              </a>
              )}
              {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex w-40 h-10 rounded-lg bg-primary items-center justify-center font-bold hover:bg-white text-white hover:text-secondary shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all gap-2">
                Ver Demo
              </a>
              )}
            </div>
        </div>

        {/* ventana principal cp Projects.jsx*/}
        <div className="border-4 border-textmain rounded-xl bg-background/80 p-0 relative z-0 shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] transition-colors duration-500">
          <div className="bg-primary border-b-4 rounded-t-lg border-textmain p-2 flex justify-between items-center px-4 transition-colors duration-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-textmain shadow-[1px_1px_0_0_rgb(var(--text-color-secondary))]"></div>
              <span className="font-bold text-white text-xs md:text-sm tracking-wide">Analisis_Sistema.md</span>
           </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
              <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            
            {/* Lado Izquierdo: Ilustración del personaje */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110"></div>
                <img 
                  src={project.characterImg} 
                  alt="Ilustración del Proyecto" 
                  className="w-full max-w-[300px] h-auto object-contain relative z-10"
                />
              </div>
            </div>

            {/* Lado Derecho: Textos Descriptivos */}
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-textmain mb-1 tracking-tight pb-2 inline-block">
                  Descripción General del Proyecto
                </h3>
                <p className="text-textsecondary text-md leading-relaxed transition-colors duration-500">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary mb-1 tracking-tight pb-2 inline-block">
                    Retos y Soluciones
                </h3>
                <p className="text-textsecondary text-md leading-relaxed transition-colors duration-500">
                  {project.challenges || "Documentación de retos en progreso..."}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* contenido extra */}
        {project.extraContent && project.extraContent.length > 0 && (
          <div className="flex flex-col gap-10 mt-8 mb-4 max-w-5xl mx-auto md:mx-0">
            {project.extraContent.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg md:text-xl font-black text-white bg-primary backdrop-blur-md px-4 md:px-6 py-2 md:py-3 mb-4 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))] w-fit">
                  {section.subtitle}
                </h3>
                <p className="text-textsecondary text-base md:text-lg leading-relaxed mb-4 transition-colors duration-500">
                  {formatTerminalText(section.text)}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* galería */}
        <div>
          <div className="flex justify-end mb-4 md:mb-8 md:pl-10">
            <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))]">
              <h3 className="text-xl md:text-3xl font-black text-textmain tracking-widest uppercase">Galería de Interfaces</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagen Principal */}
            <div className="md:col-span-2 border-4 border-textmain rounded-xl overflow-hidden bg-background/80 shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] transition-colors duration-500 cursor-zoom-in group">
              <img 
                src={project.images[0]} 
                alt="Vista Principal" 
                onClick={() => setZoomedImage(project.images[0])}
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Imagen 2 */}
            <div className="border-4 border-textmain rounded-xl overflow-hidden bg-background/80 shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] transition-colors duration-500 cursor-zoom-in group">
              <img 
                src={project.images[1]} 
                alt="Vista Secundaria" 
                onClick={() => setZoomedImage(project.images[1])}
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"  
                />
            </div>

            {/* Imagen 3 */}
            <div className="border-4 border-textmain rounded-xl overflow-hidden bg-background/80 shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] transition-colors duration-500 cursor-zoom-in group">
              <img 
                src={project.images[2]} 
                alt="Detalle" 
                onClick={() => setZoomedImage(project.images[2])}
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
              <Footer />
      </div>
      {/* MODAL DE IMAGEN AMPLIADA */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300"
          onClick={() => setZoomedImage(null)} 
        >
          <div 
            className="relative max-w-6xl w-full border-4 border-textmain rounded-xl overflow-hidden shadow-[8px_8px_0_0_rgb(var(--color-darker))] bg-background cursor-default flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra de la ventana */}
            <div className="bg-primary border-b-4 border-textmain p-2 flex justify-between items-center px-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm tracking-wide">Image_Viewer.exe</span>
              </div>
              <button 
                onClick={() => setZoomedImage(null)}
                className="w-6 h-6 border-2 border-textmain bg-background flex items-center justify-center font-bold text-xs text-textmain hover:bg-textmain hover:text-white transition-colors"
              >
                X
              </button>
            </div>
            
            {/* Imagen ampliada */}
            <div className="p-2 md:p-4 flex justify-center bg-background/20">
              <img 
                src={zoomedImage} 
                alt="Ampliación"  
                className="w-full h-auto max-h-[75vh] object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}