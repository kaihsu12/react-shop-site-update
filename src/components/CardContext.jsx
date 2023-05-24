import { createContext } from 'react';

const cardData = [
  {
    label: '持卡人姓名',
    defaultValue: 'John Doe',
    inputValue: '',
  },
  {
    label: '卡號',
    defaultValue: '1111 2222 3333 4444',
    inputValue: '',
  },
  {
    label: '有效期限',
    defaultValue: 'MM/YY',
    inputValue: '',
  },
  {
    label: 'CVC / CCV',
    defaultValue: '123',
    inputValue: '',
  },
];

export const CardContext = createContext(cardData);
