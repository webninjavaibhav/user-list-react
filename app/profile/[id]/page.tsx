'use client';

import { Box } from '@chakra-ui/react';
import useProfile from './useProfile';
import UserCard from '@/components/UserCard';
import ErrorPage from '@/components/ErrorPage';

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const { userDetails } = useProfile({ id: params?.id });

  return (
    <Box
      height='100vh'
      width='100vw'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {userDetails?.errors?.isInvalidUserId ? (
        <ErrorPage isInvalidRoute />
      ) : userDetails?.errors?.apiError?.length ? (
        <ErrorPage />
      ) : (
        <UserCard user={userDetails?.data} isLoading={userDetails?.loading} />
      )}
    </Box>
  );
};

export default ProfilePage;
