import React from 'react';
import { getUserId, getUser } from '@/utils/GetUserId';

const Feed = () => {
  const userId = getUserId();
  const user = getUser();

  return (
    <>
      <h1 className='text-center text-2xl text-blue-500'>Feed</h1>
      <h2 className='text-xl'>Current user: {userId}</h2>

      <div className='text-bold text-white'>{user}</div>
    </>
  );
};

export default Feed;
