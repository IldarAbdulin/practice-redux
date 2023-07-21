import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Users } from '../components';
import { fetchUsers } from '../redux/actions/users-action';

export default function UsersPage() {
  const { users, loading, error } = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {loading ? <h1>Loading...</h1> : <Users title={'Users'} users={users} />}
      {error && <p className="text-red-600 underline">{error}</p>}
    </>
  );
}
