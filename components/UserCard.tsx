import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Skeleton,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { FieldValuePropType, UserCardPropType } from '@/app/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const FieldValue = ({ fieldName, value }: FieldValuePropType) => {
  return (
    <Text mb='1'>
      <Text as='span' paddingRight={1} fontWeight='bold'>
        {`${fieldName}:`}
      </Text>
      {value}
    </Text>
  );
};

const UserCard = ({ user, isLoading }: UserCardPropType) => {
  const path = usePathname();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const isOnProfilePage = path.includes('profile');

  const profileRoute =
    user?.id && !Number.isNaN(+user?.id) ? `/profile/${user?.id}` : '#';

  return (
    <Box bg={useColorModeValue('white', 'gray.800')}>
      <Flex>
        <Box width='100px' height='100px' position='relative'>
          <Skeleton
            isLoaded={imageLoaded && !isLoading}
            height='100%'
            width='100%'
          >
            <Image
              src={user?.avatar}
              alt={`${user?.first_name} ${user?.last_name}`}
              objectFit='cover'
              width='100%'
              height='100%'
              onLoad={() => setImageLoaded(true)}
            />
          </Skeleton>
        </Box>
        <Box p='4'>
          {isLoading ? (
            <>
              <Stack width={200}>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
              </Stack>
            </>
          ) : (
            <>
              <FieldValue
                fieldName='First name'
                value={
                  isOnProfilePage ? (
                    user?.first_name
                  ) : (
                    <Link href={profileRoute} style={{ color: '#00F' }}>
                      {user?.first_name}
                    </Link>
                  )
                }
              />
              <FieldValue fieldName='Last name' value={user?.last_name} />
              <FieldValue fieldName='Email' value={user?.email} />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCard;
