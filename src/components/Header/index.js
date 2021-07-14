import React from 'react';
import logo from '../../assets/images/lovely_box-logo.png';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Link href='#'>
          <S.Logo src={logo} alt="Logo"></S.Logo>
        </S.Link>
      </S.LogoContainer>
      <S.Login href="#">Bem-vindo :) <br/>Entre ou Cadastre-se</S.Login>
      <S.Links>
        <S.Link href='#plans'>
          <i className='bi bi-bag'></i>
        </S.Link>
        <S.Link href='#informations'>
          <i className='bi bi-question-circle'></i>
        </S.Link>
      </S.Links>
    </S.Header>
  );
};

export default Header;
