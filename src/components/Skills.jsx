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
    'Affinity',
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

      {/* Extra tools */}
      <div className="border-4 border-textmain rounded-xl bg-transparent p-0 relative shadow-[4px_4px_0px_0px_rgb(var(--text-color-secondary)/0.2)] md:shadow-[8px_8px_0px_0px_rgb(var(--text-color-secondary)/0.2)] backdrop-blur-sm transition-colors duration-500">
        
        {/* Barra superior estilo ventana */}
        <div className="bg-primary border-b-4 rounded-t-lg border-textmain p-2 flex justify-between items-center px-4 transition-colors duration-500">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-textmain shadow-[1px_1px_0_0_rgb(var(--text-color-secondary))]"></div>
              <span className="font-bold text-white text-xs md:text-sm tracking-wide">powershell.exe - Extra_Tools</span>
           </div>
           
           <div className="flex gap-2">
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-200">_</div>
             <div className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-black hover:text-white transition-colors">X</div>
           </div>
        </div>

        {/* Interior de la Terminal */}
        <div className="p-5 md:p-8 bg-background/30 overflow-hidden relative rounded-b-lg transition-colors duration-500 font-mono text-xs md:text-sm flex flex-col gap-4">
          
          {/* Comando 1*/}
          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <span className="text-secondary font-bold break-all">PS C:\Users\habib\Desktop\\portafolio-habib&gt;</span> 
            <span className="text-textmain whitespace-nowrap">cd extratools</span>
          </div>

          {/* Comando 2*/}
          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <span className="text-secondary font-bold break-all">PS C:\Users\habib\Desktop\\portafolio-habib\extratools&gt;</span> 
            <span className="text-textmain whitespace-nowrap">ls</span>
          </div>
          
          {/* ls*/}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 my-2 pl-2 md:pl-4 border-l-2 border-primary/30">
            {extraTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 group cursor-default">
                <span className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">-a----</span>
                <span className="text-textsecondary font-bold group-hover:text-primary transition-colors">
                  {tool.toLowerCase().replace(/\s+/g, '_')}.exe
                </span>
              </div>
            ))}
          </div>

          {/* Input final*/}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-2">
            <span className="text-secondary font-bold break-all">PS C:\Users\habib\Desktop\\portafolio-habib\extratools&gt;</span>
            <span className="w-2.5 h-4 bg-primary animate-pulse inline-block mt-1 md:mt-0"></span>
          </div>

        </div>
      </div>
      
    </section>
  );
}