import React from 'react';
import { Link } from 'react-router-dom';

export default function Todos({ title, todos }) {
  return (
    <div className="mt-5">
      <h1 className="text-center font-normal text-[30px]">{title}</h1>
      <div className="mt-5 flex justify-between items-center flex-wrap gap-2">
        {todos.map((todo) => (
          <div key={todo.id} className="w-[100%]">
            <p className="text-red-600">{todo.id}</p>
            <h3 className="text-gray-800 text-[24px]">{todo.title}</h3>
            <div className="flex gap-2 items-center">
              <input type="checkbox" checked={todo.completed} />
              <Link
                to={`/todos/${todo.id}`}
                className="underline text-red-600"
                href=""
              >
                Read More
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
