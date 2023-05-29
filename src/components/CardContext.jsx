import { createContext } from 'react';

const cardData = [
  {
    id: 'holder',
    label: '持卡人姓名',
    defaultValue: 'John Doe',
    inputValue: '',
  },
  {
    id: 'number',
    label: '卡號',
    defaultValue: '1111 2222 3333 4444',
    inputValue: '',
  },
  {
    id: 'expiration',
    label: '有效期限',
    defaultValue: 'MM/YY',
    inputValue: '',
  },
  {
    id: 'cvc',
    label: 'CVC / CCV',
    defaultValue: '123',
    inputValue: '',
  },
];

export const CardContext = createContext(cardData);
