import { UserProfileType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useProfile = ({ id }: { id: string }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const isValidId = id && !Number.isNaN(+id);

  const { isPending, error, data } = useQuery<UserProfileType>({
    queryKey: ['user-profile'],
    enabled: !!isValidId,
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`)
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
    userDetails: {
      data: data?.data,
      loading: isPending,
      errors: {
        apiError: [...errors, error?.message]?.filter((err) => !!err),
        isInvalidUserId: !isValidId,
      },
    },
  };
};

export default useProfile;
