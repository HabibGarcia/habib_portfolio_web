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
    <section id="skills" className="py-10 px-4 max-w-5xl mx-auto mt-10">
      
      {/* Habilidades Principales */}
      <div className="mb-20">
        
        {/* Título */}
        <div className="flex items-center mb-8">
            <div className="flex items-center gap-4 border-2 border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="text-secondary font-black text-xl animate-pulse">{'>'}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase">Tech Stack</h3>
        </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mainSkills.map((skill, index) => (
            <div 
              key={index} 
              // Hover con efecto de resplandor azul y desplazamiento hacia arriba y a la izquierda
              className="border-4 border-black rounded-2xl bg-background/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0_0_25px_rgba(157,125,255,0.5)] hover:border-secondary hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 <img src={skill.img} alt={`${skill.name} icon`} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-gray-200 text-sm tracking-wide">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel de Herramientas Extra */}
      <div className="border-4 border-black rounded-xl bg-transparent p-0 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm">
        
        <div className="bg-primary border-b-4 rounded-t-lg border-black p-2 flex justify-between items-center px-4">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)]"></div>
              <span className="font-bold text-white text-sm tracking-wide">Extra_Tools.exe</span>
           </div>
           
           <div className="flex gap-2">
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
           </div>
        </div>

        <div className="p-4 bg-background/70 overflow-hidden relative rounded-b-lg">
          
          <div className="w-full inline-flex flex-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll py-2">
              {[...extraTools, ...extraTools, ...extraTools].map((tool, index) => (
                <li 
                  key={index} 
                  //diseño terminal
                  className="whitespace-nowrap border border-gray-700 bg-black text-gray-300 font-mono px-6 py-2 rounded-md shadow-[0_0_10px_rgba(74,125,255,0.1)] text-sm tracking-widest hover:text-primary hover:border-primary transition-colors cursor-default"
                >
                  <span className="text-secondary mr-2">{'>'}</span>{tool}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      
    </section>
  );
}