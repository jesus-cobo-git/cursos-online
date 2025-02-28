import { useState } from 'react';
import type { Course } from '../types/Course';
import PurchaseDialog from './PurchaseDialog';
import VideoDialog from './VideoDialog';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail = ({ course }: CourseDetailProps) => {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(course.purchased || false);

  const handlePurchase = () => {
    // Aquí iría la lógica real de compra
    setIsPurchased(true);
    setIsPurchaseDialogOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            {course.title}
          </h1>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="text-gray-600">
            <strong>Duración:</strong> {course.duration}
          </span>
          <span className="text-gray-600">
            <strong>Nivel:</strong> {course.level}
          </span>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
          <p className="text-gray-600">{course.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructor</h2>
          <div className="flex items-center">
            <div>
              <p className="font-medium text-gray-900">{course.instructor}</p>
              <p className="text-gray-600">Experto en {course.category}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Temario</h2>
          <ul className="space-y-3">
            {course.syllabus.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-primary-100 text-primary-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {course.price.toLocaleString('es-ES', {
                  style: 'currency',
                  currency: 'EUR'
                })}
              </p>
              {course.rating && (
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(course.rating!) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {course.students && `${course.students} estudiantes`}
                  </span>
                </div>
              )}
            </div>
            
            {!isPurchased ? (
              <button
                onClick={() => setIsPurchaseDialogOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Comprar curso
              </button>
            ) : (
              <button
                onClick={() => setIsVideoDialogOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Ver contenido
              </button>
            )}
          </div>
        </div>
      </div>

      {isPurchaseDialogOpen && (
        <PurchaseDialog
          course={course}
          onClose={() => setIsPurchaseDialogOpen(false)}
          onPurchase={handlePurchase}
        />
      )}

      {isVideoDialogOpen && (
        <VideoDialog
          course={course}
          onClose={() => setIsVideoDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default CourseDetail; 