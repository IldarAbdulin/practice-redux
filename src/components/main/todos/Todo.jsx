import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Todo({ title, todo }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="mt-5">
      <button
        className="p-2 border-red-700 border-2 rounded duration-200 hover:text-red-700 hover:bg-black"
        onClick={goBack}
      >
        Go Back
      </button>
      <h1 className="text-center font-normal text-[30px]">{title}</h1>
      <div className="mt-5 flex justify-between items-center flex-wrap gap-2">
        <div key={todo.id} className="w-[100%]">
          <p className="text-red-600">{todo.id}</p>
          <h3 className="text-gray-800 text-[24px]">{todo.title}</h3>
          <div className="flex gap-2 items-center">
            <input type="checkbox" checked={todo.completed} />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
