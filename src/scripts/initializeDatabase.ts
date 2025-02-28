import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import type { Course } from '../types/Course';

const firebaseConfig = {
  apiKey: "AIzaSyBAMt9PWImp5T3V4VSzDovh3O8Mh_8Rhj4",
  authDomain: "cursos-online-3ba27.firebaseapp.com",
  databaseURL: "https://cursos-online-3ba27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cursos-online-3ba27",
  storageBucket: "cursos-online-3ba27.firebasestorage.app",
  messagingSenderId: "483313603372",
  appId: "1:483313603372:web:2ee81c451ed8705311d289"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const courses: Course[] = [
  {
    id: 'html-css-basico',
    title: 'Introducción a HTML y CSS',
    description: 'Aprende los fundamentos del desarrollo web con HTML5 y CSS3. Este curso te enseñará a crear páginas web modernas y responsivas desde cero.',
    price: 49.99,
    instructor: 'María González',
    duration: '6 horas',
    level: 'Básico',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    syllabus: [
      'Introducción al desarrollo web',
      'Estructura básica HTML5',
      'Selectores CSS',
      'Flexbox y Grid',
      'Diseño responsivo',
      'Mejores prácticas'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.8,
    students: 1234
  },
  {
    id: 'javascript-avanzado',
    title: 'JavaScript Avanzado',
    description: 'Domina JavaScript moderno con conceptos avanzados como promesas, async/await, módulos y patrones de diseño.',
    price: 79.99,
    instructor: 'Carlos Ruiz',
    duration: '12 horas',
    level: 'Avanzado',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    featured: true,
    syllabus: [
      'ES6+ características',
      'Promesas y async/await',
      'Módulos y bundlers',
      'Patrones de diseño',
      'Testing con Jest',
      'Optimización y rendimiento'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.9,
    students: 856
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Aprende React desde cero. Construye aplicaciones web modernas con la biblioteca más popular de JavaScript.',
    price: 69.99,
    instructor: 'Ana Martínez',
    duration: '8 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    featured: true,
    syllabus: [
      'Introducción a React',
      'Componentes y Props',
      'Estado y ciclo de vida',
      'Hooks',
      'Enrutamiento',
      'Gestión de estado'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.7,
    students: 2345
  },
  {
    id: 'machine-learning-intro',
    title: 'Introducción al Machine Learning',
    description: 'Descubre los fundamentos del aprendizaje automático y la inteligencia artificial con Python y scikit-learn.',
    price: 89.99,
    instructor: 'David López',
    duration: '10 horas',
    level: 'Intermedio',
    category: 'Inteligencia Artificial',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    featured: false,
    syllabus: [
      'Fundamentos de ML',
      'Preprocesamiento de datos',
      'Algoritmos supervisados',
      'Algoritmos no supervisados',
      'Evaluación de modelos',
      'Proyectos prácticos'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.6,
    students: 1567
  },
  {
    id: 'python-django',
    title: 'Python y Django',
    description: 'Aprende a crear aplicaciones web robustas con Python y el framework Django.',
    price: 69.99,
    instructor: 'Laura Sánchez',
    duration: '15 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: false,
    syllabus: [
      'Introducción a Python',
      'Fundamentos de Django',
      'Modelos y Base de datos',
      'Vistas y Templates',
      'APIs REST',
      'Despliegue'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.5,
    students: 987
  },
  {
    id: 'devops-fundamentals',
    title: 'Fundamentos de DevOps',
    description: 'Aprende las prácticas y herramientas esenciales de DevOps para mejorar el ciclo de desarrollo de software.',
    price: 89.99,
    instructor: 'Miguel Torres',
    duration: '20 horas',
    level: 'Avanzado',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    syllabus: [
      'Introducción a DevOps',
      'Control de versiones con Git',
      'Contenedores con Docker',
      'Orquestación con Kubernetes',
      'CI/CD',
      'Monitorización'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.8,
    students: 756
  },
  {
    id: 'vue-js-completo',
    title: 'Vue.js Completo',
    description: 'Domina Vue.js y construye aplicaciones web reactivas y escalables.',
    price: 74.99,
    instructor: 'Roberto Pérez',
    duration: '16 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    featured: false,
    syllabus: [
      'Fundamentos de Vue.js',
      'Componentes y Props',
      'Vue Router',
      'Vuex para gestión de estado',
      'Composición API',
      'Testing y Despliegue'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.7,
    students: 892
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Computing',
    description: 'Aprende a diseñar, implementar y administrar servicios en la nube de Amazon Web Services.',
    price: 99.99,
    instructor: 'Patricia Ramos',
    duration: '25 horas',
    level: 'Avanzado',
    category: 'Cloud Computing',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    syllabus: [
      'Introducción a AWS',
      'EC2 y Elastic Beanstalk',
      'S3 y almacenamiento',
      'Lambda y Serverless',
      'RDS y DynamoDB',
      'CloudFormation'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.9,
    students: 1234
  },
  {
    id: 'flutter-mobile',
    title: 'Desarrollo Móvil con Flutter',
    description: 'Crea aplicaciones móviles multiplataforma con Flutter y Dart.',
    price: 84.99,
    instructor: 'Javier Méndez',
    duration: '18 horas',
    level: 'Intermedio',
    category: 'Móvil',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: false,
    syllabus: [
      'Introducción a Dart',
      'Widgets y UI',
      'Gestión de estado',
      'Navegación',
      'Integración con APIs',
      'Publicación en stores'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.6,
    students: 756
  },
  {
    id: 'data-science-python',
    title: 'Ciencia de Datos con Python',
    description: 'Aprende análisis de datos, visualización y machine learning con Python.',
    price: 94.99,
    instructor: 'Elena Castro',
    duration: '22 horas',
    level: 'Intermedio',
    category: 'Inteligencia Artificial',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    featured: true,
    syllabus: [
      'Pandas y NumPy',
      'Visualización con Matplotlib',
      'Análisis estadístico',
      'Machine Learning básico',
      'Proyectos prácticos',
      'Big Data con PySpark'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.8,
    students: 1567
  },
  {
    id: 'angular-master',
    title: 'Angular Masterclass',
    description: 'Conviértete en un experto en Angular desarrollando aplicaciones empresariales.',
    price: 89.99,
    instructor: 'Fernando Silva',
    duration: '20 horas',
    level: 'Avanzado',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    featured: false,
    syllabus: [
      'Arquitectura Angular',
      'RxJS y Observables',
      'NgRx para estado',
      'Testing avanzado',
      'Optimización',
      'Despliegue en la nube'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.7,
    students: 923
  },
  {
    id: 'mongodb-complete',
    title: 'MongoDB Completo',
    description: 'Domina MongoDB y aprende a diseñar bases de datos NoSQL escalables.',
    price: 79.99,
    instructor: 'Ricardo Montero',
    duration: '14 horas',
    level: 'Intermedio',
    category: 'Bases de Datos',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: false,
    syllabus: [
      'Fundamentos NoSQL',
      'CRUD Operations',
      'Agregaciones',
      'Indexación',
      'Replicación',
      'Sharding'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.6,
    students: 845
  },
  {
    id: 'kubernetes-pro',
    title: 'Kubernetes Profesional',
    description: 'Aprende a orquestar contenedores y desplegar aplicaciones escalables con Kubernetes.',
    price: 99.99,
    instructor: 'Diego Ramírez',
    duration: '24 horas',
    level: 'Avanzado',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    syllabus: [
      'Arquitectura Kubernetes',
      'Pods y Deployments',
      'Servicios y Networking',
      'Almacenamiento',
      'Seguridad',
      'CI/CD con Kubernetes'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.9,
    students: 678
  },
  {
    id: 'swift-ios',
    title: 'Desarrollo iOS con Swift',
    description: 'Aprende a crear aplicaciones nativas para iOS utilizando Swift y SwiftUI.',
    price: 89.99,
    instructor: 'Carmen Vega',
    duration: '19 horas',
    level: 'Intermedio',
    category: 'Móvil',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: false,
    syllabus: [
      'Fundamentos de Swift',
      'UIKit básico',
      'SwiftUI',
      'Gestión de datos',
      'APIs y Networking',
      'Publicación App Store'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.7,
    students: 567
  },
  {
    id: 'cybersecurity-basics',
    title: 'Fundamentos de Ciberseguridad',
    description: 'Aprende los conceptos básicos de seguridad informática y protección de datos.',
    price: 74.99,
    instructor: 'Manuel Ortiz',
    duration: '16 horas',
    level: 'Básico',
    category: 'Seguridad',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: false,
    syllabus: [
      'Principios de seguridad',
      'Criptografía básica',
      'Seguridad en redes',
      'Ethical Hacking',
      'Protección de datos',
      'Mejores prácticas'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.5,
    students: 789
  },
  {
    id: 'blockchain-dev',
    title: 'Desarrollo Blockchain',
    description: 'Aprende a desarrollar aplicaciones descentralizadas con Ethereum y Solidity.',
    price: 94.99,
    instructor: 'Pablo Moreno',
    duration: '21 horas',
    level: 'Avanzado',
    category: 'Blockchain',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    syllabus: [
      'Fundamentos Blockchain',
      'Smart Contracts',
      'Solidity',
      'Web3.js',
      'DApps',
      'Seguridad en Blockchain'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    rating: 4.8,
    students: 456
  }
];

const initializeDatabase = async () => {
  try {
    const coursesRef = ref(database, 'courses');
    await set(coursesRef, courses.reduce((acc, course) => {
      acc[course.id] = course;
      return acc;
    }, {} as Record<string, Course>));
    console.log('Base de datos inicializada con éxito');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

initializeDatabase(); 