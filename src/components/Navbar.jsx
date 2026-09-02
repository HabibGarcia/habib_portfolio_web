import { useState, useEffect } from 'react';

export default function Navbar() {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para el tema alternativo
  const [isAltTheme, setIsAltTheme] = useState(false);

  // Efecto para cambiar el tema
  useEffect(() => {
    if (isAltTheme) {
      document.documentElement.setAttribute('data-theme', 'alt');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isAltTheme]);

  const toggleTheme = () => setIsAltTheme(!isAltTheme);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b-4 border-darker transition-colors duration-500 shadow-[0_4px_30px_rgb(var(--color-primary)/0.1)]">
      <div className="max-w-[1450px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO Y NOMBRE */}
        <a href="#" onClick={closeMenu} className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-sm overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
            <img src="/logo_portfolio.png" alt="Logo Habib" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-textmain text-sm md:text-base tracking-widest uppercase drop-shadow-md group-hover:text-primary transition-colors duration-300">
            Habib García
          </span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Sobre mí</a>
          <a href="#projects" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Proyectos</a>
          <a href="#experience" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Experiencia</a>
          <a href="#art" className="text-textmain hover:text-secondary hover:font-bold text-sm font-medium transition-colors">Arte</a>
        </nav>

        {/* BOTONES DESKTOP (CV + TEMA) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/CV_Habib_Garcia.pdf"
            download="CV_Habib_Garcia.pdf"
            className="bg-primary hover:bg-background text-white hover:text-primary border-2 border-darkerButton rounded-lg font-bold text-sm py-2 px-4 shadow-[4px_4px_0_0_rgb(var(--color-darker-button))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            CV
          </a>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center border-2 border-darkerButton hover:bg-background text-white hover:text-primary transition-transform shadow-[4px_4px_0_0_rgb(var(--color-darker-button))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px]"
            aria-label="Cambiar Tema"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 bg-background border-2 border-darker rounded-md text-textmain shadow-[2px_2px_0_0_rgb(var(--color-darker))] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-background border-b-4 border-darker transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'max-h-96 border-t-2 opacity-100' : 'max-h-0 border-t-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-6 shadow-[0_10px_30px_rgb(var(--color-primary)/0.2)]">
          <nav className="flex flex-col gap-4 border-b-2 border-darker/20 pb-6">
            <a href="#about" onClick={closeMenu} className="text-textmain font-bold text-lg hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-secondary">{'>'}</span> Sobre mí
            </a>
            <a href="#projects" onClick={closeMenu} className="text-textmain font-bold text-lg hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-secondary">{'>'}</span> Proyectos
            </a>
            <a href="#experience" onClick={closeMenu} className="text-textmain font-bold text-lg hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-secondary">{'>'}</span> Experiencia
            </a>
            <a href="#art" onClick={closeMenu} className="text-textmain font-bold text-lg hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-secondary">{'>'}</span> Arte
            </a>
          </nav>
          
          <div className="flex gap-4">
            <button 
              onClick={() => { toggleTheme(); closeMenu(); }}
              className="flex-1 rounded-lg bg-background flex items-center justify-center gap-2 border-2 border-darker text-textmain py-3 font-bold shadow-[4px_4px_0_0_rgb(var(--color-darker))] transition-transform active:translate-y-[4px] active:translate-x-[4px] active:shadow-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
              Tema
            </button>
            <a 
              href="/CV_Habib_Garcia.pdf"
              download="CV_Habib_Garcia.pdf"
              onClick={closeMenu}
              className="flex-1 bg-primary text-white border-2 border-darkerButton rounded-lg font-bold py-3 flex items-center justify-center gap-2 shadow-[4px_4px_0_0_rgb(var(--color-darker-button))] transition-all active:translate-y-[4px] active:translate-x-[4px] active:shadow-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}