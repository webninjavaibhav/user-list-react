import { useQuery } from '@tanstack/react-query';
import { UsersResponseType } from './types';
import { useState } from 'react';

const useHome = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const { isPending, error, data } = useQuery<UsersResponseType>({
    queryKey: ['users'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        .then((res) => {
          setErrors([]);
          if (!res.ok) {
            throw new Error('Invalid user profile');
          }
          return res.json();
        })
        .catch((err) => {
          setErrors([err.message]);
        }),
  });

  return {
    users: {
      data,
      loading: isPending,
      errors: [...errors, error?.message]?.filter((err) => !!err),
    },
  };
};

export default useHome;
