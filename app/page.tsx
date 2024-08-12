'use client';
import React from 'react';
import useHome from './useHome';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CircularProgress,
  Box,
  Center,
} from '@chakra-ui/react';
import { UserType } from './types';
import UserCard from '@/components/UserCard';
import ErrorPage from '@/components/ErrorPage';

const Page = () => {
  const { users } = useHome();

  return (
    <>
      {users.loading ? (
        <Box
          height='100vh'
          width='100vw'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Center>
            <CircularProgress isIndeterminate color='green.300' />
          </Center>
        </Box>
      ) : users?.errors?.length ? (
        <ErrorPage />
      ) : (
        <Accordion paddingX={5} paddingY={10}>
          {users?.data?.data?.map((user: UserType) => (
            <AccordionItem key={user.id}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {user.first_name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UserCard {...{ user }} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  );
};

export default Page;
