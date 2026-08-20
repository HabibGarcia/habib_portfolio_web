import { useState, useEffect } from 'react';

export default function Banner() {
  {/**Creamos el estado para saber si el tema alternativo está activo */}
  const [isAltTheme, setIsAltTheme] = useState(false);
  
  {/** Cambia el atributo del documento cuando el estado cambia*/}
  useEffect(() => {
    if (isAltTheme) {
      document.documentElement.setAttribute('data-theme', 'alt');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isAltTheme]);

  {/**Función para alternar el estado */}
  const toggleTheme = () => setIsAltTheme(!isAltTheme);

  return (
    <section className="max-w-[1450px] pt-4 mx-auto">
      {/* Contenedor Principal*/}
      <div className="relative rounded-[2rem] overflow-hidden min-h-[95vh] flex flex-col p-6 md:p-12 shadow-2xl transition-colors duration-500">
        
        {/* Capas de Fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/portafoliobanner.png')] bg-cover bg-[85%_center] md:bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-darker/10 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-darker/60 via-transparent to-transparent transition-colors duration-500"></div>
        </div>

        {/* Menú Superior */}
        <nav className="relative z-20 flex justify-between items-center w-full">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-sm"><img src="/logo_portfolio.png" alt="Logo Habib" /></div>
            <span className="font-bold text-white text-sm tracking-widest uppercase drop-shadow-md">
              Habib García
            </span>
          </div>

          {/* Centro: Píldora de Navegación */}
          <div className="hidden md:flex bg-background/60 backdrop-blur-md border border-background/20 rounded-full px-12 py-3.5 gap-12 transition-colors duration-500">
            <a href="#about" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Sobre mí</a>
            <a href="#projects" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Proyectos</a>
            <a href="#experience" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Experiencia</a>
            <a href="#art" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Arte</a>
          </div>

          {/* Derecha: Botones de CV y Tema */}
          <div className="flex items-center gap-3">
            
            {/* Botón Descargar CV */}
            <a 
              href="/CV_Habib_Garcia.pdf"
              download="CV_Habib_Garcia.pdf"
              className="bg-primary hover:bg-white text-white hover:text-secondary rounded-lg font-bold text-xs md:text-sm py-2 px-4 shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center gap-2"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              CV
            </a>
            
            {/* Toggle Switch del Sol */}
            <button 
              onClick={toggleTheme}
              className="hidden md:flex w-10 h-10 rounded-lg bg-primary items-center justify-center hover:bg-white text-white hover:text-secondary shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all gap-2" aria-label="Toggle Theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
          </div>
        </nav>

        {/* Texto Principal */}
        <div className="relative z-10 w-full max-w-4xl mt-auto mb-10">
          <h1 className="text-7xl md:text-[9rem] font-bold text-white leading-none tracking-tight mb-2 drop-shadow-lg">
            Habib
          </h1>
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white mb-8 tracking-tight drop-shadow-md">
            García Challco
          </h2>
          
          {/* Subtítulo */}
          <p className="text-gray-200 text-sm md:text-base font-medium leading-relaxed mb-6 max-w-xl drop-shadow-md">
            Desarrollador Full-Stack | UI/UX | PHP, JavaScript, React | <br/>
            Integración ERP & CRM | WordPress | Diseño Gráfico <br/>
          </p>

          {/* Enlaces Sociales */}
          <div className="flex gap-6 mb-10">
            {/* Enlace GitHub */}
            <a href="https://github.com/HabibGarcia" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-secondary transition-colors group cursor-pointer drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="group-hover:-translate-y-1 transition-transform">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-bold tracking-wider underline-offset-4">GitHub</span>
            </a>
            
            {/* Enlace LinkedIn */}
            <a href="https://www.linkedin.com/in/habib-garc%C3%ADa-challco-aa5565258/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-secondary transition-colors group cursor-pointer drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="group-hover:-translate-y-1 transition-transform">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-bold tracking-wider underline-offset-4">LinkedIn</span>
            </a>
          </div>
          
          {/* Botón retro */}
          <a className="bg-primary hover:bg-white text-white hover:text-secondary rounded-lg font-black text-lg py-3 px-6 shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all" href="#about"> 
            Sobre mí
          </a>
        </div>

      </div>
    </section>
  );
}