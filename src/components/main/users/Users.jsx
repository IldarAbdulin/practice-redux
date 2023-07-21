import React from 'react';
import { Link } from 'react-router-dom';

export default function Users({ title, users }) {
  return (
    <div className="mt-5">
      <h1 className="text-center font-normal text-[30px]">{title}</h1>
      <div className="mt-5 flex justify-between items-center flex-wrap gap-2">
        {users.map((user) => (
          <div key={user.id} className="w-[100%]">
            <p className="text-red-600">{user.id}</p>
            <h3 className="text-gray-800 text-[18px]">name: {user.name}</h3>
            <p className="text-gray-700 text-[18px]">
              username: {user.username}
            </p>
            <p className="text-gray-700 text-[18px]">email: {user.email}</p>
            <p className="text-green-500 text-[18px]">Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`} className="underline" href="">
              More Info
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
