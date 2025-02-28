# Plataforma de Cursos Online

Una plataforma moderna para la venta de cursos online construida con Astro, React, TailwindCSS y Firebase.

## Características

- 🎨 Diseño moderno y responsivo con TailwindCSS
- 🚀 Rendimiento optimizado con Astro
- ⚛️ Componentes interactivos con React
- 🔥 Base de datos en tiempo real con Firebase
- 🛒 Sistema de compras simulado
- 📹 Reproductor de video para contenido del curso
- 🔍 Búsqueda y filtrado de cursos
- ⭐ Sistema de valoraciones
- 📱 Diseño adaptable a todos los dispositivos

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Una cuenta de Firebase

## Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/plataforma-cursos-online.git
cd plataforma-cursos-online
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura Firebase:
   - Crea un nuevo proyecto en [Firebase Console](https://console.firebase.google.com)
   - Habilita Realtime Database
   - Copia las credenciales de configuración
   - Reemplaza las credenciales en `src/firebase/config.ts`

4. Inicializa la base de datos con datos de ejemplo:
```bash
npm run ts-node src/scripts/initializeDatabase.ts
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

## Estructura del Proyecto

```
src/
├── components/     # Componentes React y Astro
├── layouts/        # Layouts de Astro
├── pages/          # Páginas de Astro
├── firebase/       # Configuración de Firebase
├── types/         # Tipos de TypeScript
├── scripts/       # Scripts de utilidad
└── styles/        # Estilos globales
```

## Tecnologías Utilizadas

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter)

Link del proyecto: [https://github.com/tu-usuario/plataforma-cursos-online](https://github.com/tu-usuario/plataforma-cursos-online)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
