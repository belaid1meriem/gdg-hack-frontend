import React, { useEffect } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function ErrorMsg({ msg, closeError }) {
  useEffect(() => {
    const timer = setTimeout(() => closeError(), 5000);
    return () => clearTimeout(timer); // Cleanup timeout
  }, [closeError]);

  return (
    <div className="fixed bottom-5 left-10 z-50 flex items-center gap-3 bg-red-50 border border-red-500 border-l-4 px-4 py-2 rounded-md shadow-md w-fit">
      <FaRegCircleXmark className="text-red-500 w-6 h-6" />
      <div className="text-red-500 text-sm font-medium">{msg}</div>
      <IoClose
        className="text-red-500 w-5 h-5 cursor-pointer transition hover:shadow-md hover:rounded-full"
        onClick={closeError}
      />
    </div>
  );
}

export default ErrorMsg;
