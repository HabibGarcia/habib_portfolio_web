export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0E0D0F] relative z-20 border-t-4 border-secondary pt-12 pb-8 mt-20 shadow-[0_-15px_30px_rgba(115,0,255,0.1)]">
      <div className="max-w-5xl mx-auto px-4">
        
        {/**Logo*/}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16 border-b-2 border-gray-800/80 pb-8 gap-6 md:gap-0">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl shadow-[4px_4px_0_0_rgba(115,0,255,1)] flex items-center justify-center p-2 group hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all cursor-pointer">
              <img src="/logo_portfolio.png" alt="Logo Habib" className="w-full h-full object-contain" />
            </div>
            {/* Tu Nombre y Título */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-widest uppercase mb-1">Habib García</h2>
              <span className="text-gray-400 font-mono text-sm md:text-base font-bold tracking-widest">Desarrollador Full-Stack</span>
            </div>
          </div>

          <p className="text-gray-600 font-medium text-sm md:text-base max-w-xs text-center md:text-right">
            Diseñando e integrando ecosistemas digitales para experiencias web excepcionales.
          </p>
        </div>

        {/** Contenido del Footer */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
          {/*Formulario de Contacto */}
          <div className="w-full md:w-7/12 relative">
            <div className="border-4 border-white/90 rounded-xl bg-background/10 p-0 relative z-0 shadow-[6px_6px_0px_0px_rgba(var(--text-color-secondary)/0.8)] backdrop-blur-sm">
              
              <div className="bg-secondary border-b-4 rounded-t-lg border-white/90 p-2 flex justify-between items-center px-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full border border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)]"></div>
                    <span className="font-bold text-white text-sm tracking-wide">Contact_Form.exe</span>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200 text-black">_</div>
                   <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors text-black">X</div>
                 </div>
              </div>

              <form action="https://formspree.io/f/xnpaerdl" method="POST" className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Nombre</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Tu nombre..." 
                    className="bg-background/10 border-2 border-gray-500 rounded-md p-3 text-white text-sm focus:outline-none focus:border-secondary transition-colors shadow-inner" 
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Dirección de Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="tu@email.com" 
                    className="bg-background/10 border-2 border-gray-500 rounded-md p-3 text-white text-sm focus:outline-none focus:border-secondary transition-colors shadow-inner" 
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Mensaje</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    placeholder="¿Cómo puedo ayudarte?" 
                    className="bg-background/10 border-2 border-gray-500 rounded-md p-3 text-white text-sm focus:outline-none focus:border-secondary transition-colors shadow-inner"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 bg-secondary hover:bg-white text-white hover:text-secondary rounded-lg font-black text-lg py-3 px-6 shadow-[4px_4px_0_0_rgb(var(--text-color))] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Lado Derecho: Redes y Despedida */}
          <div className="w-full md:w-5/12 flex flex-col justify-center gap-8 pl-0 md:pl-8 relative z-10">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tight mb-4">¡Escríbeme!</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                ¿Tienes un proyecto en mente, buscas colaborar o simplemente quieres saludar? Encuéntrame en mis plataformas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="https://github.com/HabibGarcia" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-background/50 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-darker group-hover:scale-110 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-7 h-7 object-contain"/>
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/habib-garc%C3%ADa-challco-aa5565258/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-background/50 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-darker group-hover:scale-110 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">LinkedIn</span>
              </a>
              
              <a href="mailto:hab.garcia07@gmail.com" className="flex items-center gap-4 bg-background/50 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-darker group-hover:scale-110 transition-transform">
                   <span className="text-black font-black text-2xl">@</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Final */}
        <div className="mt-10 text-center">
           <p className="text-gray-500 font-mono text-sm font-bold">
             © {new Date().getFullYear()} Habib García.   Desarrollado con Tailwind CSS y React. <span className="text-secondary">¡Gracias por visitar!</span>
           </p>
        </div>
      </div>
    </footer>
  );
}