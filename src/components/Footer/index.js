import React from 'react';
import * as S from './styled';

const Footer = () => {
  return (
    <S.Footer>
      <S.Assignature>
        Made with <S.HeartIcon className='bi bi-suit-heart-fill'></S.HeartIcon>{' '}
        by Bruna de Andrade Braguin | 2021
      </S.Assignature>
      <S.Links>
        <S.Link href='https://github.com/BrunaABraguin'>
          <i className='bi bi-github'></i>
        </S.Link>
        <S.Link href='https://www.linkedin.com/in/brunabraguin/'>
          <i className='bi bi-linkedin'></i>
        </S.Link>
      </S.Links>
    </S.Footer>
  );
};

export default Footer;
