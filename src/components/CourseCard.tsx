import type { Course } from '../types/Course';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary-600">
            {course.category}
          </span>
          <span className="text-sm text-gray-500">
            {course.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm font-medium text-gray-900">
              {course.rating}
            </span>
            <span className="text-sm text-gray-500 ml-2">
              ({course.students} estudiantes)
            </span>
          </div>
          <span className="text-lg font-bold text-primary-600">
            ${course.price}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Por {course.instructor}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            course.level === 'Básico'
              ? 'bg-green-100 text-green-800'
              : course.level === 'Intermedio'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        <a
          href={`/cursos/${course.id}`}
          className="mt-4 block w-full text-center bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors duration-200"
        >
          Ver curso
        </a>
      </div>
    </div>
  );
};

export default CourseCard; 