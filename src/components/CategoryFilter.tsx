import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/config';
import type { Course } from '../types/Course';

interface CategoryFilterProps {
  initialCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter = ({ initialCategory = 'Todos', onCategoryChange }: CategoryFilterProps) => {
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const coursesRef = ref(database, 'courses');
        const snapshot = await get(coursesRef);
        
        if (snapshot.exists()) {
          const coursesData = snapshot.val();
          const courses = Object.values(coursesData) as Course[];
          const uniqueCategories = Array.from(
            new Set(courses.map(course => course.category))
          ).sort();
          
          setCategories(['Todos', ...uniqueCategories]);
        }
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    // Actualizar la URL
    const url = new URL(window.location.href);
    if (category === 'Todos') {
      url.searchParams.delete('categoria');
    } else {
      url.searchParams.set('categoria', category);
    }
    window.history.pushState({}, '', url.toString());

    // Disparar evento personalizado para notificar el cambio
    const event = new CustomEvent('categoryChange', { 
      detail: { category } 
    });
    window.dispatchEvent(event);
  };

  if (loading) {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 