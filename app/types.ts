import { ReactNode } from 'react';

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type FieldValuePropType = {
  fieldName: string;
  value: string | ReactNode;
};

export type SupportType = {
  url: string;
  text: string;
};

export type UsersResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: SupportType;
};

export type UserCardPropType = {
  user?: UserType;
  isLoading?: boolean;
};

export type UserProfileType = {
  data: UserType;
  support: SupportType;
};

export type ErrorPagePropType = {
  isInvalidRoute?: boolean;
  problemFetchingData?: boolean;
};
