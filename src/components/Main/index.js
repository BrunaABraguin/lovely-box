import React from 'react';
import * as S from './styled';

const Main = () => {
  return (
    <S.Main>
      <S.Newsletter type='email' required="true"></S.Newsletter>
      <S.Button>Inscrever</S.Button>
    </S.Main>
  );
};

export default Main;
