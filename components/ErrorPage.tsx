import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ErrorPagePropType } from '@/app/types';

const ErrorPage = ({
  isInvalidRoute,
  problemFetchingData,
}: ErrorPagePropType) => {
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={8} textAlign='center' maxWidth='400px'>
        <Heading size='xl' color={textColor}>
          {isInvalidRoute ? 'Invalid Route' : 'Data Fetch Error'}
        </Heading>
        <Text fontSize='lg' color={textColor}>
          {isInvalidRoute
            ? "Oops! The page you're looking for doesn't exist."
            : "We're having trouble fetching the data you requested."}
        </Text>
        <Button
          colorScheme={isInvalidRoute ? 'orange' : 'blue'}
          size='lg'
          onClick={() => (window.location.href = '/')}
        >
          Go to Homepage
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
