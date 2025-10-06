
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/212681603641"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.687a.75.75 0 01-.882-.882zM6.554 5.378a.625.625 0 00-.625-.625h-.002a.625.625 0 00-.625.625v.002c0 1.562 1.263 2.824 2.825 2.824h.001a.625.625 0 00.625-.625v-1.576a.625.625 0 00-.625-.625zm4.999 5.25a.625.625 0 00-.625-.625h-1.576a.625.625 0 00-.625.625v.002c0 1.562 1.263 2.824 2.825 2.824h.001a.625.625 0 00.625-.625zm4.999-1.875a.625.625 0 00-.625-.625h-1.576a.625.625 0 00-.625.625v.002c0 1.562 1.263 2.824 2.825 2.824h.001a.625.625 0 00.625-.625v-1.576z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
