import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Photos } from '../components';
import { fetchPhotos } from '../redux/actions/photos-action';

export default function PhotoPage() {
  const { photos, loading, error } = useSelector(({ photos }) => photos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Photos title={'Photos'} photos={photos} />
      )}
      {error && <p className="text-red-600 underline">{error}</p>}
    </>
  );
}
