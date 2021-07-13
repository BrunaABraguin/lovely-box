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
        <S.Product src={ headphone }></S.Product>
        <S.Product src={ ds }></S.Product>
        <S.Product src={ mug }></S.Product>
        <S.Product src={ control }></S.Product>
      </S.Products>
    </S.Container>
  );
};

export default Products;
