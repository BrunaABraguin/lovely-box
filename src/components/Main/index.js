import React, { useState } from 'react';
import * as S from './styled';

const Main = () => {
  const [email, setEmail] = useState('');

  function sendEmail() {
    localStorage.setItem('emailNewsletter', email);
  }

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
          required='required'
          placeholder='Seu endereço de e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></S.Email>
        <S.Button onClick={sendEmail}>Inscrever</S.Button>
      </S.NewsletterContainer>
    </S.Main>
  );
};

export default Main;
