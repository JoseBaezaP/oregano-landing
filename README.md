# 🌿 Orégano Premium - Landing Page

Landing page para tienda de orégano premium con arquitectura limpia (Clean Architecture).

## 🚀 Tecnologías

- **Astro 5.16** - Framework principal
- **Tailwind CSS 4** - Estilos
- **Preact** - Componentes interactivos (formulario)
- **TypeScript** - Tipado seguro
- **i18n nativo de Astro** - Multiidioma (ES/EN)

## 📁 Estructura del Proyecto (Clean Architecture)

```
src/
├── core/                          # Capa de dominio
│   ├── entities/                 # Entidades del negocio
│   │   └── Testimonial.ts
│   ├── interfaces/               # Contratos/interfaces
│   │   └── EmailService.ts
│   └── use-cases/                # Lógica de negocio
│
├── infrastructure/                # Capa de infraestructura
│   ├── services/                 # Servicios externos
│   │   └── FormEmailService.ts
│   └── i18n/                     # Traducciones ES/EN
│       └── translations.ts
│
├── presentation/                  # Capa de presentación
│   ├── components/               # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Products.astro
│   │   ├── Testimonials.astro
│   │   ├── ContactForm.tsx
│   │   └── Footer.astro
│   └── layouts/                  # Layouts de página
│       └── Layout.astro
│
├── shared/                        # Recursos compartidos
│   ├── constants/                # Constantes
│   │   ├── config.ts
│   │   └── testimonials.ts
│   └── utils/                    # Utilidades
│       └── i18n.ts
│
└── pages/                         # Páginas Astro
    ├── index.astro               # Página en español
    ├── en.astro                  # Página en inglés
    └── api/
        └── contact.ts            # API endpoint para formulario
```

## ✨ Características

- ✅ **Multiidioma** (Español/Inglés) con i18n nativo de Astro
- ✅ **Responsive** - Funciona en móvil, tablet y desktop
- ✅ **Formulario de contacto** funcional con validación
- ✅ **Video embebido** con controles nativos
- ✅ **Testimonios** - 4 testimonios dummy
- ✅ **Clean Architecture** - Código organizado y mantenible
- ✅ **Performance** - Preact para componentes ligeros

## 🎨 Secciones

1. **Hero** - Logo, título, video principal y CTA
2. **About** - Información del orégano con 3 features
3. **Products** - Tarjeta promocional del producto
4. **Testimonials** - Reseñas de clientes
5. **Contact** - Formulario de contacto
6. **Footer** - Enlaces y redes sociales

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌍 Rutas

- `/` - Página en español
- `/en` - Página en inglés

## 📧 Formulario de Contacto

El formulario actualmente registra los datos en la consola. Para conectar con un servicio de email real:

1. Edita `src/pages/api/contact.ts`
2. Integra con servicios como:
   - [Resend](https://resend.com)
   - [SendGrid](https://sendgrid.com)
   - [Nodemailer](https://nodemailer.com)
   - [EmailJS](https://www.emailjs.com)

## 🎯 Próximos Pasos

- [ ] Configurar servicio de email real
- [ ] Agregar analytics (Google Analytics, Plausible, etc.)
- [ ] Optimizar imágenes (usar Astro Image)
- [ ] Agregar más contenido del PDF
- [ ] Configurar dominio personalizado

## 📝 Notas

- Los logos están en `/public/WhatsApp Image 2025-11-30 at 15.10.49*.jpeg`
- La tarjeta promocional en `/public/WhatsApp Image 2025-11-30 at 15.11.13.jpeg`
- El video en `/public/WhatsApp Video 2025-11-30 at 15.10.50.mp4`
- El PDF con información en `/public/Promoción de Mercados_Punto4.pdf`

---

Desarrollado con ❤️ usando Astro y Clean Architecture
