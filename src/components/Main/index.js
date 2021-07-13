import React from 'react';
import * as S from './styled';

const Main = () => {
  return (
    <S.Main>
      <S.CalloutContainer>
        <S.Callout>
          Inscreva-se para receber promoções exclusivas como membro Challenger!
        </S.Callout>
      </S.CalloutContainer>
      <S.NewsletterContainer>
        <S.Email
          type='email'
          required='true'
          placeholder='Seu endereço de e-mail'
        ></S.Email>
        <S.Button>Inscrever</S.Button>
      </S.NewsletterContainer>
    </S.Main>
  );
};

export default Main;
