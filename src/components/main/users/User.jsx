import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function User({ title, user }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
        <div key={user.id} className="w-[100%]">
          <p className="text-red-600">{user.id}</p>
          <h3 className="text-gray-800 text-[18px]">name: {user.name}</h3>
          <p className="text-gray-700 text-[18px]">username: {user.username}</p>
          <p className="text-gray-700 text-[18px]">email: {user.email}</p>
          <p className="text-green-500 text-[18px]">Phone: {user.phone}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
