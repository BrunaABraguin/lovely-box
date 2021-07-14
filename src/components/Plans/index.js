import React from 'react';
import * as S from './styled';

const Plans = () => {
  return (
    <S.Container id='plans'>
      <S.Headline>Planos</S.Headline>
      <S.Cards>
        <S.Card>
          <S.CardHeader>Platina</S.CardHeader>
          <h2>R$ 100.00</h2>
          <h3>2~3 Itens</h3>
          <S.Button>Assinar</S.Button>
        </S.Card>
        <S.Card>
          <S.CardHeader>Diamante</S.CardHeader>
          <h2>R$ 300.00</h2>
          <h3>4~5 Itens</h3>
          <S.Button>Assinar</S.Button>
        </S.Card>
        <S.Card>
          <S.CardHeader>Mestre</S.CardHeader>
          <h2>R$ 500.00</h2>
          <h3>7+ Itens</h3>
          <S.Button>Assinar</S.Button>
        </S.Card>
      </S.Cards>
    </S.Container>
  );
};

export default Plans;
