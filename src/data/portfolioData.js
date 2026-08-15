// src/data/portfolioData.js
export const projectsData = [
  {
    id: 'PRO_001',
    title: 'Multi-Channel Inventory Sync Engine (ERP/E-commerce Bridge)',
    description: 'An automated middleware system designed to seamlessly synchronize product catalogs and inventory levels across multiple e-commerce platforms and a central ERP, preventing overselling and streamlining B2B operations.',
    tech: ['Node.js', 'React', 'Redis'],
    characterImg: '/habib_character3.png', //ilustración
    images: ['/novabank-1.jpg', '/novabank-1.jpg', '/novabank-1.jpg'] //Img adicionales
  },
  {
    id: 'PRO_002',
    title: 'Secure FinTech Core & Interactive Banking Dashboard',
    description: 'A highly secure, modular web application simulating core banking operations, featuring strict client-side validation, JWT authentication, and real-time transaction processing.',
    tech: ['TypeScript', 'NestJS', 'Tailwind CSS'],
    characterImg: '/habib_character2.png',
    images: ['/poke-1.png', '/poke-2.png', '/poke-3.png']
  },
  {
    id: 'PRO_003',
    title: 'Headless Travel & Itinerary Management CMS',
    description: 'A decoupled Content Management System enabling dynamic generation of travel packages and itineraries, featuring a lightning-fast frontend driven by a robust RESTful API backend.',
    tech: ['React', 'GraphQL','AWS S3'],
    characterImg: '/habib_character1.png',
    images: ['/shangri-1.png', '/shangri-2.png', '/shangri-3.png']
  }, 
  {
    id: 'PRO_004',
    title: 'Enterprise Digital Transformation & ERP Integration (SEMI)',
    description: 'An end-to-end digital transformation project for a major medical society (SEMI). Architected a centralized ecosystem bridging a custom e-commerce portal with a backend CRM, automating academic enrollments, membership workflows, and certificate generation.',
    longDescription: 'NovaBank nació de la necesidad de entender cómo se estructuran las aplicaciones financieras de alta seguridad. El objetivo principal fue crear una experiencia de usuario fluida sin sacrificar la validación de datos en tiempo real.',
    challenges: 'El mayor reto fue implementar la captura de datos asíncrona y gestionar el estado global de los formularios multipaso sin ralentizar la interfaz. Lo solucioné estructurando un flujo de validación personalizado en React.',
    githubLink: 'https://github.com/TuUsuario/NovaBank',
    liveLink: 'https://novabank-demo.com',
    tech: ['WordPress/WooCommerce', 'EspoCRM (BPM)', 'REST API'],
    characterImg: '/habib_character1.png',
    images: ['/semi-1.png', '/semi-2.png', '/semi-3.png']
  }
];