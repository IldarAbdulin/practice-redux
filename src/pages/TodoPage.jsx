import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todos } from '../components';
import { fetchTodos } from '../redux/actions/todos-action';

export default function TodoPage() {
  const { todos, loading, error } = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      {loading ? <h1>Loading...</h1> : <Todos title={'Todos'} todos={todos} />}
      {error && <p className="text-red-600 underline">{error}</p>}
    </>
  );
}
