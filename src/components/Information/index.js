import React from 'react';
import * as S from './styled';
import step1 from '../../assets/images/step-1.png';
import step2 from '../../assets/images/step-2.png';
import step3 from '../../assets/images/step-3.png';

const Infos = () => {
  return (
    <S.Container id='informations'>
      <S.Headline>Como funciona?</S.Headline>
      <S.HowToContainer>
        <S.Step>
          <S.Image src={step1} />
          <p>Assine um de nossos planos</p>
        </S.Step>
        <S.Step>
          <S.Image src={step2} />
          <p>Escolhemos os itens mais especiais para você</p>
        </S.Step>
        <S.Step>
          <S.Image src={step3} />
          <p>Aproveite e compartilhe! #lovelybox</p>
        </S.Step>
      </S.HowToContainer>
    </S.Container>
  );
};

export default Infos;
