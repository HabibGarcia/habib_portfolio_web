export default function Experience() {
  const experienceData = [
    {
      id: 1,
      date: 'Mar 2026 - Jun 2026',
      title: 'Practicante desarrollador Full Stack y administrador web',
      company: 'Essenzial',
      description: 'Unificación de una plataforma digital integral para una sociedad médica como proyecto educativo interino. Desarrollo de plugins personalizados y sincronización del backend. Integración de sistemas complejos que incluyen herramientas de comercio electrónico, sistemas de gestión de aprendizaje (LMS) y sincronización de herramientas CRM y sistemas ERP.',
      color: 'bg-secondary',
      shadow: 'shadow-[0_0_15px_rgba(74,125,255,0.6)]'
    },
    {
      id: 2,
      date: 'Sept 2024 - Jun 2026',
      title: 'Grado Superior en Desarrollo de Aplicaciones Web',
      company: 'IES San Juan de la Cruz',
      description: 'Formación académica en desarrollo de aplicaciones web con énfasis en tecnologías modernas y prácticas de programación.',
      color: 'bg-primary',
      shadow: 'shadow-[0_0_15px_rgba(239,75,76,0.6)]'
    }
  ];

  return (
    <section id="experience" className="py-8 px-4 max-w-5xl mx-auto mt-10">
      
      {/* TÍTULO */}
      <div className="flex items-center mb-8">
            <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))]">
              <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
              <h3 className="text-xl md:text-3xl font-black text-textmain tracking-widest uppercase">Experiencia</h3>
            </div>
      </div>

      {/* TIMELINE */}
      <div className="relative pl-8 md:pl-0">
        {/* La línea vertical central*/}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                // Alterna el lado de las tarjetas en escritorio (izq/der)
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Espacio vacío para balancear en escritorio */}
              <div className="hidden md:block w-5/12"></div>

              {/* Nodo central brillante */}
              <div className="absolute left-[-5px] md:left-1/2 w-4 h-4 rounded-full border-4 border-black z-10 md:-translate-x-1/2 mt-6 md:mt-0">
                <div className={`w-full h-full rounded-full ${item.color} ${item.shadow} animate-pulse`}></div>
              </div>

              {/* Tarjeta de Contenido */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0 md:mt-0 group">
                <div className="border-4 border-textmain rounded-xl bg-background/90 backdrop-blur-sm p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(var(--text-color-secondary)/0.2)] hover:shadow-none hover:translate-y-[6px] hover:translate-x-[6px] transition-all duration-300 relative overflow-hidden">
                  
                  {/* Acento de color en el borde superior interno */}
                  <div className={`absolute top-0 left-0 w-full h-4 ${item.color}`}></div>

                  <div className="flex flex-col mb-4">
                    {/* Fecha estilo terminal */}
                    <span className={`font-mono text-xs md:text-sm font-bold tracking-widest mb-2 inline-block w-fit px-4 py-1 rounded-full border-2 bg-secondary/5 ${index % 2 === 0 ? 'text-secondary border-secondary' : 'text-primary border-primary'} transition-colors duration-500`}>
                      {item.date}
                    </span>
                    <h4 className="text-2xl font-black text-textmain tracking-tight leading-tight mb-1">{item.title}</h4>
                    <span className="text-textsecondary font-bold text-sm tracking-wide uppercase">{item.company}</span>
                  </div>
                  
                  <p className="text-textsecondary text-sm md:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}