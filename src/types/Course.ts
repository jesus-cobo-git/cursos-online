export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  category: string;
  image: string;
  featured: boolean;
  syllabus: string[];
  videoUrl?: string;
  rating?: number;
  students?: number;
  purchased?: boolean;
} 