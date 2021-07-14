import React from 'react';
import * as S from './styled';
import headphone from '../../assets/images/headphone.png';
import ds from '../../assets/images/ds.png';
import mug from '../../assets/images/mug.png';
import control from '../../assets/images/control.png';

const Products = () => {
  return (
    <S.Container>
      <S.Headline>Produtos que você ama</S.Headline>
      <S.Products>
        <S.Product src={headphone} alt='Fone de ouvido'></S.Product>
        <S.Product src={ds} alt='Vídeo-game'></S.Product>
        <S.Product src={mug} alt='Caneca'></S.Product>
        <S.Product src={control} alt='Controel de vídeo-game'></S.Product>
      </S.Products>
    </S.Container>
  );
};

export default Products;
