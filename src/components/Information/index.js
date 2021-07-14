import React from 'react';
import * as S from './styled';
import step1 from '../../assets/images/step-1.png';
import step2 from '../../assets/images/step-2.png';
import step3 from '../../assets/images/step-3.png';

const Infos = () => {
  return (
    <S.Container id="informations">
      <S.Headline>Como funciona?</S.Headline>
      <S.HowToContainer>
        <S.HowTo src={step1}></S.HowTo>
        <S.HowTo src={step2}></S.HowTo>
        <S.HowTo src={step3}></S.HowTo>
      </S.HowToContainer>
    </S.Container>
  );
};

export default Infos;
