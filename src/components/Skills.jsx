export default function Skills() {
  const mainSkills = [
    { name: 'JavaScript', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { name: 'React', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: 'Node.js', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
    { name: 'PHP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'MySQL', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" },
    { name: 'Oracle Database', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
    { name: 'WordPress', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
    { name: 'Java', img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
  ];
//https://devicon.dev/
  const extraTools = [
    'Sensei LMS',
    'Dolibarr',
    'EspoCRM',
    'BPM',
    'API RESTFUL',
    'Git',
    'Github',
    'Bootstrap',
    'Tailwind',
    'AWS',
    'Jira',
    'Trello',
    'Planner',
    'Photoshop',
    'Illustrator',
    'Affinity Designer',
    'Krita',
    'Figma',
    'JSON'
  ];

 return (
    <section id="skills" className="py-10 px-4 max-w-5xl mx-auto mt-6 transition-colors duration-500">
      
      {/* Habilidades Principales */}
      <div className="mb-20">
        
        {/* Título */}
        <div className="flex items-center mb-8">
            <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-colors duration-500 shadow-[6px_6px_0_0_rgb(var(--text-color))]">
              <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
              <h3 className="text-xl md:text-3xl font-black text-textmain tracking-widest uppercase">Stack Tecnológico</h3>
            </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mainSkills.map((skill, index) => (
            <div 
              key={index} 
              // Hover con efecto de resplandor dinámico usando la variable secondary
              className="border-4 border-textmain rounded-2xl bg-background/80 backdrop-blur-sm p-4 md:p-6 flex flex-col items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[6px_6px_0px_0px_rgb(var(--text-color-secondary)/0.2)] hover:shadow-[0_0_10px_rgb(var(--color-secondary)/0.5)] hover:border-secondary hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 <img src={skill.img} alt={`${skill.name} icon`} className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <span className="font-bold text-textmain text-xs md:text-sm tracking-wide text-center transition-colors duration-500">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel de Herramientas Extra */}
      <div className="border-4 border-textmain rounded-xl bg-transparent p-0 relative shadow-[4px_4px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[8px_8px_0px_0px_rgb(var(--text-color-secondary)/0.2)] backdrop-blur-sm transition-colors duration-500">
        
        {/* Barra superior estilo ventana */}
        <div className="bg-secondary border-b-4 rounded-t-lg border-textmain p-2 flex justify-between items-center px-4 transition-colors duration-500">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-textmain shadow-[1px_1px_0_0_rgb(var(--text-color-secondary))]"></div>
              <span className="font-bold text-white text-xs md:text-sm tracking-wide">Extra_Tools.exe</span>
           </div>
           
           <div className="flex gap-2">
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
                 <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
           </div>
        </div>

        {/* Interior del carrusel */}
        <div className="p-4 bg-background/70 overflow-hidden relative rounded-b-lg transition-colors duration-500">
          
          <div className="w-full inline-flex flex-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll py-2">
              {[...extraTools, ...extraTools, ...extraTools].map((tool, index) => (
                <li 
                  key={index} 
                  // Diseño terminal adaptado al tema dinámico
                  className="whitespace-nowrap border-2 border-darker/50 bg-background text-textsecondary font-mono px-4 md:px-6 py-2 rounded-md shadow-[0_0_10px_rgb(var(--color-primary)/0.1)] text-xs md:text-sm tracking-widest hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                >
                  <span className="text-secondary mr-2 font-black">{'>'}</span>{tool}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      
    </section>
  );
}