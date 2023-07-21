import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="rounded-sm">
      <div className="py-2 px-4 flex justify-around items-center">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? 'text-gray-600 underline' : 'text-black'
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/photos`}
          className={({ isActive }) =>
            isActive ? 'text-gray-600 underline' : 'text-black'
          }
        >
          Photos
        </NavLink>
        <NavLink
          to={`/todos`}
          className={({ isActive }) =>
            isActive ? 'text-gray-600 underline' : 'text-black'
          }
        >
          Todos
        </NavLink>
        <NavLink
          to={`/users`}
          className={({ isActive }) =>
            isActive ? 'text-gray-600 underline' : 'text-black'
          }
        >
          Users
        </NavLink>
      </div>
      <hr className="w-[100%] border-gray-600" />
    </div>
  );
}
