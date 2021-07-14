import styled from 'styled-components';
import bg from '../../assets/images/products-bg.jpeg';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
`;

export const Headline = styled.h1`
  color: #f8a1d1;
  text-align: center;
  font-weight: 900;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 20rem;
`;

export const Product = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
