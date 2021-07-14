import React from 'react';
import * as S from './styled';

const Plans = () => {
  return (
    <S.Container>
      <S.Headline>Planos</S.Headline>
      <S.Cards>
        <S.Card>
          <S.CardHeader>Platina</S.CardHeader>
        </S.Card>
        <S.Card>
          <S.CardHeader>Diamante</S.CardHeader>
        </S.Card>
        <S.Card>
          <S.CardHeader>Mestre</S.CardHeader>
        </S.Card>
      </S.Cards>
    </S.Container>
  );
};

export default Plans;
