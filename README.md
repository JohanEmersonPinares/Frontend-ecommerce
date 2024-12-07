
# Frontend Project

Este es el proyecto de frontend desarrollado en React con Vite. Utiliza TailwindCSS para el diseño, React Router DOM para el enrutamiento, Axios para las solicitudes HTTP, y React Toastify para las notificaciones. A continuación, encontrarás las instrucciones para instalar, ejecutar y construir el proyecto.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Bestseller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   ├── context/
│   │   └── ShopContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Order.jsx
│   │   ├── PlaceOrder.jsx
│   │   └── Product.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Configuración y Scripts

### Pre-requisitos

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu máquina.

### Instalación

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo utilizando Vite.
- `npm run build`: Genera una versión de producción del proyecto en la carpeta `dist`.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores o advertencias.
- `npm run preview`: Previsualiza la versión de producción después de ejecutar el build.

### Dependencias Principales

- **React**: Librería para construir interfaces de usuario.
- **React Router DOM**: Librería para el enrutamiento dentro de la aplicación.
- **Axios**: Cliente HTTP para realizar solicitudes al servidor.
- **React Toastify**: Librería para mostrar notificaciones.

### Dependencias de Desarrollo

- **Vite**: Herramienta de desarrollo y empaquetado rápida para aplicaciones modernas de frontend.
- **Tailwind CSS**: Framework CSS para estilos rápidos y reutilizables.
- **ESLint**: Herramienta para analizar el código en busca de errores.
- **PostCSS y Autoprefixer**: Para el procesamiento de CSS.

## Configuración de TailwindCSS

TailwindCSS está configurado a través de los archivos `tailwind.config.js` y `postcss.config.js`. Asegúrate de revisar estas configuraciones si deseas personalizar los estilos.

## Enrutamiento

Las rutas de la aplicación están definidas en la carpeta `src/pages`, donde cada archivo representa una página individual de la aplicación, como `Home`, `Cart`, `Login`, entre otras.

## Contexto de la Aplicación

En `src/context/ShopContext.jsx`, se implementa un contexto para la gestión global del estado de la aplicación, como los datos del carrito y el estado de autenticación del usuario.

## Notificaciones

Para manejar las notificaciones, se usa React Toastify, que permite mostrar alertas personalizables en la interfaz.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, asegúrate de seguir las convenciones de código y ejecutar `npm run lint` antes de hacer un commit.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.


## Autor

- **GitHub**: [Johan Emerson Pinares](https://github.com/JohanEmersonPinares)
- **LinkedIn**: [Johan Emerson Pinares](https://www.linkedin.com/in/johanemersonpinares/)
