export default function AboutMe() {
  return (
    <section id="about" className="py-10 px-4 max-w-5xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        
        {/* Lado Izquierdo: Ilustración */}
        <div className="w-full md:w-7/12 relative flex justify-center items-center">
          {/* Fondo decorativo*/}
          <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full transform-translate-x-5"></div>
          <img 
            src="/main_character.png" 
            alt="Ilustración de Habib" 
            className="w-full h-auto object-cover z-10 animacion-flotar" 
          />
        </div>

        {/* Lado Derecho: Caja de Texto*/}
        <div className="w-full md:w-5/12 relative flex flex-col gap-2">
          {/**Título About me derecho */}
          <div className="flex justify-end mb-2 pl-10">
            <div className="flex items-center gap-4 border-2 border-white/10 bg-background/90 backdrop-blur-md px-6 py-3 rounded-2xl transition-colors duration-500">
            <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
            <h3 className="text-2xl md:text-3xl font-black text-textmain tracking-widest uppercase">Sobre mí</h3>
          </div>
        </div>
          {/* Contenedor principal con sombra dura y borde grueso */}
          <div className="border-4 border-black rounded-xl bg-background/90 p-0 relative z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
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
                <p className="text-textsecondary text-sm md:text-base leading-relaxed">
                  Soy un Desarrollador de Aplicaciones Web apasionado por crear soluciones digitales que no solo sean funcionalmente sólidas, sino también visualmente atractivas. Técnicamente combino mi formación en Desarrollo Full-Stack y Diseño Gráfico, UX/UI y branding corporativo.
                </p>
                <p className="text-textsecondary text-sm md:text-base leading-relaxed">
                  Durante mis prácticas, participé en la creación de arquitecturas web personalizadas. Integraba sistemas de conexión de ERPs y CRMs hasta la unificación de E-commerce y sistemas de gestión de aprendizaje, asegurando flujos de trabajo eficientes.
                </p>
                <p className="text-textsecondary text-sm md:text-base leading-relaxed">
                  Asimismo, mi experiencia en ventas y atención al cliente me ha enseñado a escuchar activamente y anticipar las necesidades de los usuarios, habilidades que aplico para crear interfaces accesibles y atractivas.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}