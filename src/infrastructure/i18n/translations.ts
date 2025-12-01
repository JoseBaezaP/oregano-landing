export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      products: 'Productos',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      title: 'Orégano Premium de Calidad',
      subtitle: 'El mejor orégano natural para tus recetas',
      cta: 'Contáctanos'
    },
    about: {
      title: 'Sobre Nuestro Orégano',
      description: 'Orégano 100% natural, cultivado con los más altos estándares de calidad.'
    },
    products: {
      title: 'Nuestros Productos'
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes'
    },
    contact: {
      title: 'Contáctanos',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      submit: 'Enviar',
      success: '¡Mensaje enviado correctamente!',
      error: 'Error al enviar el mensaje. Intenta de nuevo.'
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title: 'Premium Quality Oregano',
      subtitle: 'The best natural oregano for your recipes',
      cta: 'Contact Us'
    },
    about: {
      title: 'About Our Oregano',
      description: '100% natural oregano, grown with the highest quality standards.'
    },
    products: {
      title: 'Our Products'
    },
    testimonials: {
      title: 'What Our Customers Say'
    },
    contact: {
      title: 'Contact Us',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.'
    },
    footer: {
      rights: 'All rights reserved'
    }
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      products: 'Prodotti',
      testimonials: 'Testimonianze',
      contact: 'Contatto'
    },
    hero: {
      title: 'Origano Premium di Qualità',
      subtitle: 'Il miglior origano naturale per le tue ricette',
      cta: 'Contattaci'
    },
    about: {
      title: 'Sul Nostro Origano',
      description: 'Origano 100% naturale, coltivato con i più alti standard di qualità.'
    },
    products: {
      title: 'I Nostri Prodotti'
    },
    testimonials: {
      title: 'Cosa Dicono i Nostri Clienti'
    },
    contact: {
      title: 'Contattaci',
      name: 'Nome completo',
      email: 'Indirizzo email',
      phone: 'Telefono',
      message: 'Messaggio',
      submit: 'Invia',
      success: 'Messaggio inviato con successo!',
      error: 'Errore durante l\'invio del messaggio. Riprova.'
    },
    footer: {
      rights: 'Tutti i diritti riservati'
    }
  }
} as const;

export type Locale = keyof typeof translations;
export type Translation = typeof translations.es;
