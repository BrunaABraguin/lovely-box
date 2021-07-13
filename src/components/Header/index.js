import React from 'react';
import logo from '../../assets/images/lovely_box-logo.png';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Link href='#'>
          <S.Logo src={logo}></S.Logo>
        </S.Link>
      </S.LogoContainer>
      <S.Links>
        <S.Link href='#'>
          <i class='bi bi-bag'></i>
        </S.Link>
        <S.Link href='#'>
          <i class='bi bi-question-circle'></i>
        </S.Link>
      </S.Links>
    </S.Header>
  );
};

export default Header;
