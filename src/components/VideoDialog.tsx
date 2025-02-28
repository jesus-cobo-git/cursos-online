import type { Course } from '../types/Course';

interface VideoDialogProps {
  course: Course;
  onClose: () => void;
}

const VideoDialog = ({ course, onClose }: VideoDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="aspect-w-16 aspect-h-9">
          {course.videoUrl ? (
            <iframe
              src={course.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Video no disponible</p>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contenido del curso</h3>
          <div className="space-y-4">
            {course.syllabus.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="bg-primary-100 text-primary-800 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-b-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm text-gray-500">
                Instructor: {course.instructor}
              </span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDialog; 