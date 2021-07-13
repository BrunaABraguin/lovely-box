import React from 'react';
import * as S from './styled';
import howTo from '../../assets/images/how-to.png'

const Infos = () => {
  return (
    <S.Container>
      <S.Headline>Como funciona?</S.Headline>
      <S.HowTo src={ howTo }></S.HowTo>
    </S.Container>
  );
};

export default Infos;
