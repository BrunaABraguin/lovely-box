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

  @media (min-width: 1024px) {
    margin: 3rem 20rem;
  }
  @media (max-width: 500px) {
   flex-direction: column;
   align-items: center;
  }
`;

export const Product = styled.img`
  width: 13rem;
  height: 13rem;

  @media (max-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;
