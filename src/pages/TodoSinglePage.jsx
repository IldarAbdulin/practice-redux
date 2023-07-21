import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleTodo } from '../redux/actions/todos-action';
import { Todo } from '../components';

export default function TodoSinglePage() {
  const { todo, loading, error } = useSelector(({ todos }) => todos);
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSingleTodo(id));
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <Todo title={'Todo'} todo={todo} />}
      {error && <p className="text-red-600 underline">{error}</p>}
    </div>
  );
}
