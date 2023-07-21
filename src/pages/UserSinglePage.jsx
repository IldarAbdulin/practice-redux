import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleUser } from '../redux/actions/users-action';
import { User } from '../components';

export default function UserSinglePage() {
  const { user, loading, error } = useSelector(({ users }) => users);
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <User title={'User'} user={user} />}
      {error && <p className="text-red-600 underline">{error}</p>}
    </div>
  );
}
