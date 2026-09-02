// src/data/portfolioData.js
export const projectsData = [
 {
    id: 'PRO_001',
    title: 'Enterprise Digital Transformation & ERP (SEMI)',
    description: 'Proyecto integral de transformación digital para una importante sociedad médica (SEMI). Arquitectura de un ecosistema centralizado...',
    longDescription: 'Este proyecto nació de la necesidad de entender cómo se estructuran las aplicaciones de alta seguridad y gestionar el estado global...',
    challenges: 'El mayor reto fue implementar la captura de datos asíncrona y estructurar un flujo de validación personalizado.',
    // Detalles adicionales del proyecto
    extraContent: [
      {
        subtitle: 'Integración bidireccional',
        text: 'Para conectar el e-commerce con el CRM, desarrollamos una serie de webhooks que escuchaban en tiempo real los cambios de estado en Dolibarr, actualizando automáticamente los perfiles de usuario en WordPress.'
      },
      {
        subtitle: 'Automatización de certificados',
        text: 'Se implementó un sistema automatizado en PHP puro que genera PDFs al vuelo una vez que los miembros completan sus requisitos académicos, reduciendo la carga administrativa en un 80%.'
      }
    ],
    githubLink: 'https://github.com/TuUsuario/NovaBank',
    liveLink: 'https://novabank-demo.com',
    tech: ['WordPress/WooCommerce', 'EspoCRM', 'REST API'],
    characterImg: '/habib_character1.png',
    images: ['/semi-1.png', '/semi-2.png', '/semi-3.png']
}
];