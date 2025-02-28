import { useState } from 'react';
import type { Course } from '../types/Course';

interface PurchaseDialogProps {
  course: Course;
  onClose: () => void;
  onPurchase: () => void;
}

const PurchaseDialog = ({ course, onClose, onPurchase }: PurchaseDialogProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Simulamos un proceso de compra
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría la lógica real de compra con Firebase
      onPurchase();
    } catch (err) {
      setError('Ha ocurrido un error al procesar la compra. Por favor, inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Confirmar compra
        </h2>

        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{course.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Resumen del pedido:</p>
            <p className="text-2xl font-bold text-gray-900">
              {course.price.toLocaleString('es-ES', {
                style: 'currency',
                currency: 'EUR'
              })}
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
            disabled={isProcessing}
          >
            Cancelar
          </button>
          <button
            onClick={handlePurchase}
            disabled={isProcessing}
            className={`px-4 py-2 rounded-md text-white ${
              isProcessing
                ? 'bg-primary-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Procesando...
              </span>
            ) : (
              'Confirmar compra'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDialog; 