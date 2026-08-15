export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-darker relative z-20 border-t-4 border-secondary pt-16 pb-8 mt-20 shadow-[0_-15px_30px_rgba(115,0,255,0.1)]">
      
      {/* Contenedor centralizado para mantener los márgenes de las otras secciones */}
      <div className="max-w-5xl mx-auto px-4">
        
        {/**Logo*/}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b-2 border-gray-800/80 pb-8 gap-6 md:gap-0">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(115,0,255,1)] flex items-center justify-center p-2 group hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all cursor-pointer">
              <img src="/logo_portfolio.png" alt="Logo Habib" className="w-full h-full object-contain" />
            </div>
            {/* Tu Nombre y Título */}
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-1">Habib García</h2>
              <span className="text-gray-400 font-mono text-sm md:text-base font-bold tracking-widest">Full-Stack Web Developer</span>
            </div>
          </div>

          <p className="text-gray-600 font-medium text-sm md:text-base max-w-xs text-center md:text-right">
            Designing and integrating end-to-end digital ecosystems.
          </p>
        </div>

        {/** Contenido del Footer */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch">
          {/*Formulario de Contacto */}
          <div className="w-full md:w-7/12 relative">
            <div className="border-4 border-black rounded-xl bg-background/90 backdrop-blur-sm p-0 relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              
              <div className="bg-primary border-b-4 rounded-t-lg border-black p-2 flex justify-between items-center px-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full border border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)]"></div>
                    <span className="font-bold text-white text-sm tracking-wide">Contact_Form.exe</span>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200 text-black">_</div>
                   <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors text-black">X</div>
                 </div>
              </div>

              <form className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name..." 
                    className="bg-background border-2 border-gray-700 rounded-md p-3 text-white font-mono text-sm focus:outline-none focus:border-secondary transition-colors shadow-inner" 
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background border-2 border-gray-700 rounded-md p-3 text-white font-mono text-sm focus:outline-none focus:border-secondary transition-colors shadow-inner" 
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-bold text-xs tracking-widest uppercase">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can I help you?" 
                    className="bg-background border-2 border-gray-700 rounded-md p-3 text-white font-mono text-sm focus:outline-none focus:border-secondary transition-colors resize-none shadow-inner"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 bg-primary hover:bg-white text-white hover:text-black border-4 border-black rounded-lg font-black text-lg py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Brillo decorativo */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary rounded-full -z-0 opacity-10 blur-3xl"></div>
          </div>

          {/* Lado Derecho: Redes y Despedida */}
          <div className="w-full md:w-5/12 flex flex-col justify-center gap-8 pl-0 md:pl-8 relative z-10">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tight mb-4">Let's Connect</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                Have a project in mind, looking to collaborate, or just want to say hi? Find me on my platforms.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="https://github.com/TuUsuario" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">GitHub</span>
              </a>
              
              <a href="https://linkedin.com/in/TuUsuario" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 object-contain filter invert" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">LinkedIn</span>
              </a>
              
              <a href="mailto:hab.garcia07@gmail.com" className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:border-secondary hover:-translate-y-1 hover:-translate-x-1 transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                   <span className="text-black font-black text-2xl mt-1">@</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide group-hover:text-secondary/60 transition-colors">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Final */}
        <div className="mt-10 text-center">
           <p className="text-gray-500 font-mono text-sm font-bold">
             © {new Date().getFullYear()} Habib García. Built with React & TailwindCSS
           </p>
        </div>
      </div>
    </footer>
  );
}