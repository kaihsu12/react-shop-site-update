import { createContext } from 'react';

const cardInfo = {
  firstName: '',
  lastName: '',
  number: '',
  expiration: '',
  cvv: '',
};

export const CardContext = createContext(cardInfo);
