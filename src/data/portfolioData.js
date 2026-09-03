// src/data/portfolioData.js
export const projectsData = [
 {
    id: 'PRO_001',
    title: 'Actualización y Automatización de Plataforma de Sociedades',
    description: 'Proyecto de modernización integral del ecosistema digital de una Sociedad médica (referencial). Web centralizada bajo el concepto de "Todo es un Producto", unificando membresías, ventas, solicitudes y formación.',
    longDescription: 'Desarrollado durante la Fase de Formación en la Empresa (FFE) en Essenzial, este proyecto resuelve la fragmentación digital y la alta carga de trabajo manual de la secretaría técnica de una asociación. Se diseñó una arquitectura de tres capas donde WordPress y WooCommerce gestionan la transacción, Sensei LMS habilita el campus virtual y EspoCRM actúa como el cerebro administrativo y la única fuente documental.',
    challenges: 'El mayor reto tecnológico fue establecer una conexión bidireccional y en tiempo real con el sistema EspoCRM. Esto requirió construir un puente API seguro para enviar transacciones y recibir actualizaciones de roles mediante Webhooks, eliminando así las duplicidades en la base de datos.',
    extraContent: [
      {
        subtitle: 'Desarrollo de Plugins a Medida',
        text: 'Para no depender de software de terceros, la funcionalidad core se encapsuló en tres plugins propios que interceptan los Hooks nativos de WordPress. Destacan `"woo-sensei-linker"` para automatizar matriculaciones tras un pago y `"semi-descuentos-roles"` como motor de fidelización con reglas de negocio dinámicas.'
      },
      {
        subtitle: 'Automatización BPM y Certificados',
        text: 'Se delegó la carga burocrática al motor BPM de EspoCRM. Cuando un usuario alcanza el 100% de progreso en Sensei LMS, el CRM genera dinámicamente un diploma en PDF y notifica al usuario por email. El archivo se transfiere a la web solo bajo demanda mediante una petición `GET`, optimizando el rendimiento del servidor.'
      },
      {
        subtitle: 'Módulo Interactivo de Mapas',
        text: 'Se integraron librerías externas como `Leaflet.js` y `fullcalendar-js` mediante cargas condicionales `wp_enqueue_scripts`. Esto permite geolocalizar eventos médicos, congresos y reuniones extrayendo coordenadas geográficas almacenadas en `Advanced Custom Fields (ACF)`.'
      }
    ],
    githubLink: 'https://drive.google.com/file/d/1YS3YfDiICN5ZXKRMO_fnf20kAX_DFXGC/view?usp=sharing',
  //  liveLink: 'https://www.semi.org.ar/',
    tech: ['WordPress/WooCommerce', 'EspoCRM (BPM)', 'Sensei LMS', 'PHP'],
    characterImg: '/habib_character3.png',
    images: ['/pro001_3.png', '/pro001_2.png', '/pro001_1.png']
}
];