import React from 'react';
import { useEffect } from 'react';
function Loading({ closeLoading }) {
    useEffect(() => {
        const timer = setTimeout(() => closeLoading(), 5000000);
        return () => clearTimeout(timer); // Cleanup timeout
      }, [closeLoading]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100/80 z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600 text-sm font-medium">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
