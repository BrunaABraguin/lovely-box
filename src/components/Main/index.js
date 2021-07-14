import React, { useState } from 'react';
import * as S from './styled';

const Main = (props) => {
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);

  function sendEmail() {
    if (email === '') {
      setCheck(false);
    } else {
      setCheck(true);
      localStorage.setItem('emailNewsletter', email);

      setInterval(() => {
        setCheck(false);
      }, 2000);
    }
  }

  return (
    <S.Main>
      <S.CalloutContainer>
        <S.Callout>
          Registre-se para receber promoções exclusivas!
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
        <S.Button onClick={sendEmail}>
          {check ? (
            <S.CheckIcon className='bi bi-check-lg'></S.CheckIcon>
          ) : (
            <span>Registrar</span>
          )}
        </S.Button>
      </S.NewsletterContainer>
    </S.Main>
  );
};

export default Main;
