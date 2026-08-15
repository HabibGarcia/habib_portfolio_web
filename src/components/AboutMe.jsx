export default function AboutMe() {
  return (
    <section id="about" className="py-10 px-4 max-w-5xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Lado Izquierdo: Ilustración */}
        <div className="w-full md:w-6/12 flex justify-center relative">
          {/* Fondo decorativo*/}
          <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full transform-translate-x-5 "></div>
          <img 
            src="/main_character.png" 
            alt="Ilustración de Habib" 
            className="w-full h-auto object-cover relative z-10 animacion-flotar" 
          />
        </div>

        {/* Lado Derecho: Caja de Texto*/}
        <div className="w-full md:w-6/12 relative">
          {/**Título About me derecho */}
          <div className="flex justify-end mb-2 pl-10">
            <div className="flex items-center gap-4 border-2 border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase">About Me</h3>
          </div>
        </div>
          {/* Contenedor principal con sombra dura y borde grueso */}
          <div className="border-4 border-black rounded-xl bg-background/80 p-0 relative z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
            {/* Barra superior estilo ventana */}
            <div className="bg-primary border-b-4 rounded-t-lg border-black p-2 flex justify-between items-center px-4">
               {/* Detalles del "Tab" a la izquierda */}
               <div className="flex items-center gap-2"></div>
               {/* Botones de control a la derecha */}
               <div className="flex gap-2">
                 <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
                 <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
               </div>
            </div>

            {/* Contenido interior */}
            <div className="p-8 bg-transparent">
              <div className="space-y-5">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  I am a Web Application Developer passionate about building digital solutions that are not only functionally robust but visually compelling. My journey blends technical Full-Stack expertise with formal training in Graphic Design, UX/UI, and corporate branding.
                </p>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  Technically, I specialize in crafting customized web architectures. I enjoy diving into the backend to integrate complex systems, from connecting ERPs and CRMs to unifying E-commerce and learning management systems, ensuring that business workflows run efficiently.
                </p>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  What sets me apart is my background in sales and customer service. Working directly with the public taught me empathy, active listening, and how to anticipate user needs—skills that I now translate into creating accessible and engaging user interfaces.
                </p>
              </div>
            </div>
          </div>
          {/* Acento visual luz*/}
          {/**<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#EF4B4C] rounded-full -z-10 opacity-20 blur-2xl"></div> */}
        </div>

      </div>
    </section>
  );
}