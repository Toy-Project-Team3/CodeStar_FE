import React from 'react';
import * as S from '@/styles/buttonStyled';

export const Button = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
