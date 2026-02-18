// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "SevLo | Cosmética Natural",
  description: "Cosmética para piel y cabello con ingredientes naturales. Para piel sensible, cabellos maltratados y quienes buscan productos sin químicos agresivos.",
  language: "es",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "SEVLO",
  menuLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Tendencias Virales", href: "#products" },
    { label: "Skincare", href: "#products" },
    { label: "Cabello", href: "#products" },
    { label: "Nuestra Historia", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://www.instagram.com/sevlo_cuidado_y_belleza?igsh=MThxam9lOTJydGN6dw==" },
    { icon: "Facebook", label: "Facebook", href: "https://www.facebook.com/share/1CZ7AKS2CP/" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/sevlo" },
  ],
  searchPlaceholder: "Buscar productos...",
  cartEmptyText: "Tu carrito está vacío",
  cartCheckoutText: "Pedir por WhatsApp",
  continueShoppingText: "Seguir comprando",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "COSMÉTICA NATURAL",
  title: "Belleza que\nrespeta tu piel\ny el planeta",
  ctaPrimaryText: "Ver Productos",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Conócenos",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "NUESTRA FILOSOFÍA",
  heading: "Ingredientes naturales, resultados reales",
  bodyParagraphs: [
    "En SevLo creemos en la transparencia: cada producto se prueba en nuestra propia familia antes de llegar a ti. Apostamos por cosmética consciente que respeta tanto tu piel como el planeta.",
    "Cada frasco lleva el compromiso de ofrecerte la mejor calidad a un precio justo. Sin químicos agresivos, solo lo que la naturaleza nos brinda."
  ],
  linkText: "Descubre más",
  linkTarget: "#about",
  image1: "/images/subhero-1.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 15, suffix: "+", label: "Productos Naturales" },
    { value: 100, suffix: "%", label: "Ingredientes Orgánicos" },
    { value: 50, suffix: "+", label: "Clientes Satisfechos" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "TENDENCIAS VIRALES",
  heading: "Lo más visto en redes",
  bodyParagraphs: [
    "Descubre los productos que están revolucionando el cuidado natural de la piel y el cabello. Desde nuestro viral Jabón de Leche de Arroz hasta el Perfume de Feromonas que potencia tu atracción natural.",
    "Cada producto es cuidadosamente elaborado con ingredientes de la más alta calidad."
  ],
  ctaText: "Ver Tendencias",
  ctaTarget: "#products",
  backgroundImage: "/images/video-section-bg.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "NUESTRA COLECCIÓN",
  heading: "Productos Naturales",
  description: "Explora nuestra línea de cosmética natural diseñada para cuidar tu piel y cabello con los mejores ingredientes que nos brinda la naturaleza.",
  viewAllText: "Ver Todos",
  addToCartText: "Agregar",
  addedToCartText: "¡Agregado!",
  categories: ["Todos", "Tendencias Virales", "Skincare", "Cabello"],
  products: [
    // Tendencias Virales
    { id: 1, name: "Perfume de Feromonas", price: 45, category: "Tendencias Virales", image: "/images/products/perfume-feromonas.png" },
    { id: 2, name: "Jabón de Leche de Arroz", price: 15, category: "Tendencias Virales", image: "/images/products/jabon-leche-arroz.png" },
    { id: 3, name: "Mascarilla para Ojos de Aguacate", price: 50, category: "Tendencias Virales", image: "/images/products/mascarilla-aguacate.png" },
    { id: 4, name: "Mascarilla de Carbón Activado", price: 10, category: "Tendencias Virales", image: "/images/products/mascarilla-carbon.png" },
    { id: 5, name: "Serum de Granada", price: 20, category: "Tendencias Virales", image: "/images/products/serum-granada.png" },
    { id: 6, name: "Serum de Papaya & Vit C", price: 35, category: "Tendencias Virales", image: "/images/products/serum-papaya.png" },
    // Skincare
    { id: 7, name: "Serum de Nicotinamida", price: 30, category: "Skincare", image: "/images/products/serum-nicotinamida.png" },
    { id: 8, name: "Serum de Cúrcuma", price: 30, category: "Skincare", image: "/images/products/serum-curcuma.png" },
    { id: 9, name: "Tónico de Camelias", price: 65, category: "Skincare", image: "/images/products/tonico-camelias.png" },
    // Cabello
    { id: 10, name: "Shampoo de Romero Rapunzel", price: 65, category: "Cabello", image: "/images/products/shampoo-romero.png" },
    { id: 11, name: "Shampoo para Rizos Rapunzel", price: 65, category: "Cabello", image: "/images/products/shampoo-rizos.png" },
    { id: 12, name: "Acondicionador para Rizos", price: 65, category: "Cabello", image: "/images/products/acondicionador-rizos.png" },
    { id: 13, name: "Tónico de Rizos Rapunzel", price: 65, category: "Cabello", image: "/images/products/tonico-rizos.png" },
    { id: 14, name: "Cera Capilar en Barra", price: 30, category: "Cabello", image: "/images/products/cera-capilar.png" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "100% Natural",
      description: "Ingredientes orgánicos sin químicos agresivos ni parabenos."
    },
    {
      icon: "Heart",
      title: "Con amor",
      description: "Todos los productos son probados por mi"
    },
    {
      icon: "ShieldCheck",
      title: "Calidad Garantizada",
      description: "Cada producto es probado antes de llegar a tus manos."
    },
    {
      icon: "Truck",
      title: "Entregas en CDMX",
      description: "Entregas personales en puntos céntricos y estaciones de metro."
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "BLOG",
  heading: "Consejos de Belleza Natural",
  viewAllText: "Ver todos los artículos",
  readMoreText: "Leer más",
  posts: [
    {
      id: 1,
      title: "5 beneficios del romero para el cabello",
      date: "15 Feb 2026",
      image: "/images/blog/romero-cabello.jpg",
      excerpt: "Descubre por qué el romero es el ingrediente secreto para un cabello fuerte y saludable."
    },
    {
      id: 2,
      title: "Rutina skincare con ingredientes naturales",
      date: "10 Feb 2026",
      image: "/images/blog/rutina-skincare.jpg",
      excerpt: "Guía paso a paso para una rutina de cuidado facial 100% natural."
    },
    {
      id: 3,
      title: "El poder de la leche de arroz para tu piel",
      date: "5 Feb 2026",
      image: "/images/blog/leche-arroz.jpg",
      excerpt: "Conoce los secretos detrás de este ingrediente viral asiático."
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "PREGUNTAS FRECUENTES",
  heading: "¿Tienes dudas?",
  ctaText: "Contáctanos para más información",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "¿Cómo hago un pedido?",
      answer: "Es muy sencillo: selecciona los productos que deseas, agrégalos al carrito y haz clic en 'Pedir por WhatsApp'. Te redirigiremos directamente a nuestro chat con tu lista de productos lista para enviar."
    },
    {
      id: 2,
      question: "¿Cuáles son los métodos de pago?",
      answer: "Aceptamos transferencia bancaria y efectivo en entrega. Una vez confirmado tu pedido por WhatsApp, te indicaremos los datos para el pago."
    },
    {
      id: 3,
      question: "¿Dónde hacen las entregas?",
      answer: "Realizamos entregas personales en puntos céntricos de la Ciudad de México y estaciones de metro principales. Coordina tu punto de entrega al hacer tu pedido."
    },
    {
      id: 4,
      question: "¿Los productos son aptos para piel sensible?",
      answer: "Sí, todos nuestros productos están formulados con ingredientes naturales suaves. Sin embargo, recomendamos hacer una prueba en una pequeña área de piel antes de usar cualquier producto nuevo."
    },
    {
      id: 5,
      question: "¿Cuánto duran los productos?",
      answer: "Nuestros productos tienen una vida útil de 6 a 12 meses. Al ser naturales y libres de conservantes químicos fuertes, recomendamos usarlos dentro de los primeros 6 meses para obtener los mejores resultados."
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "NUESTRA HISTORIA",
      heading: "¿Quiénes somos?",
      paragraphs: [
        "SEVLO es la marca que se interesa en tu belleza y tu satisfacción, contamos con los productos de la más alta calidad para tu cuidado personal.",
        "Creemos en la transparencia: cada producto se prueba en nuestra propia familia antes de llegar a ti. Apostamos por cosmética consciente que respeta tanto tu piel como el planeta.",
        "Cada frasco lleva el compromiso de ofrecerte la mejor calidad a un precio justo."
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#f7f7f7",
      textColor: "#333333",
    },
    {
      tag: "TESTIMONIOS",
      heading: "Lo que dicen nuestros clientes",
      paragraphs: [],
      quote: "Mi cabello es rizado y he utilizado los productos Rapunzel Curly y mi cabello se ve mucho más saludable. ¡Los recomiendo totalmente!",
      attribution: "— Uriel M., Polanco",
      image: "/images/about-2.jpg",
      backgroundColor: "#8b6d4b",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "¿Tienes preguntas?",
  description: "Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.",
  locationLabel: "Ubicación",
  location: "Ciudad de México, México",
  emailLabel: "Email",
  email: "hola@sevlo.com",
  phoneLabel: "WhatsApp",
  phone: "+52 55 5172 5689",
  formFields: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "¿En qué podemos ayudarte?",
  },
  submitText: "Enviar Mensaje",
  submittingText: "Enviando...",
  submittedText: "¡Enviado!",
  successMessage: "Gracias por contactarnos. Te responderemos pronto.",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "SEVLO",
  brandDescription: "Cosmética natural para piel y cabello. Ingredientes orgánicos, resultados reales.",
  newsletterHeading: "Suscríbete",
  newsletterDescription: "Recibe consejos de belleza natural y promociones exclusivas.",
  newsletterPlaceholder: "tu@email.com",
  newsletterButtonText: "Suscribirme",
  newsletterSuccessText: "¡Gracias por suscribirte!",
  linkGroups: [
    {
      title: "Productos",
      links: [
        { label: "Tendencias Virales", href: "#products" },
        { label: "Skincare", href: "#products" },
        { label: "Cabello", href: "#products" },
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Nuestra Historia", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contacto", href: "#contact" },
      ]
    },
    {
      title: "Ayuda",
      links: [
        { label: "Preguntas Frecuentes", href: "#faq" },
        { label: "Envíos", href: "#" },
        { label: "Términos y Condiciones", href: "#" },
      ]
    },
  ],
  legalLinks: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
  ],
  copyrightText: "© 2026 SEVLO. Ciudad de México.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/sevlo" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/sevlo" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/sevlo" },
  ],
};
