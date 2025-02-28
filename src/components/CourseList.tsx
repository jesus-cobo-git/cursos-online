import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/config';
import type { Course } from '../types/Course';
import CourseCard from './CourseCard';

interface CourseListProps {
  initialCategory?: string;
}

const CourseList = ({ initialCategory = 'Todos' }: CourseListProps) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesRef = ref(database, 'courses');
        const snapshot = await get(coursesRef);
        
        if (snapshot.exists()) {
          const coursesData = snapshot.val();
          const coursesArray = Object.values(coursesData) as Course[];
          setCourses(coursesArray);
          setFilteredCourses(coursesArray);
        } else {
          setCourses([]);
          setFilteredCourses([]);
        }
      } catch (err) {
        setError('Error al cargar los cursos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    // Escuchar cambios en la categoría
    const handleCategoryChange = (event: CustomEvent) => {
      setSelectedCategory(event.detail.category);
    };

    window.addEventListener('categoryChange', handleCategoryChange as EventListener);

    return () => {
      window.removeEventListener('categoryChange', handleCategoryChange as EventListener);
    };
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    let result = [...courses];

    // Filtrar por categoría
    if (selectedCategory && selectedCategory !== 'Todos') {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(course =>
        course.title.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower)
      );
    }

    setFilteredCourses(result);
  }, [selectedCategory, searchTerm, courses]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="bg-white rounded-lg shadow-md p-4 animate-pulse"
          >
            <div className="h-48 bg-gray-200 rounded-md mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-end">
          <input
            type="text"
            placeholder="Buscar cursos..."
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          No se encontraron cursos que coincidan con tu búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList; 