import React from 'react';
import * as S from '@/styles/buttonStyled.ts';
export const Button = (p) => {
  return <S.Button>{p.children}</S.Button>;
};
