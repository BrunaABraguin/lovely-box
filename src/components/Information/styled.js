import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f8a1d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  color: #822659;
`;

export const Headline = styled.h1`
  text-align: center;
  font-weight: 900;
  -webkit-text-stroke-color: white;
`;

export const Step = styled.div`
  width: 250px;
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const Image = styled.img`
  width: 220px;

  @media (min-width: 798px) and (max-width: 1200px) {
    width: 150px;
  }
`;

export const HowToContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  width: 60%;

  @media (max-width: 798px) {
    align-items: center;
    flex-direction: column;
  }
`;
