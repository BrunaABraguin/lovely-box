import styled from 'styled-components';

export const Container = styled.section`
  background-color: #9d0191;
  padding: 2rem;
`;

export const Headline = styled.h1`
  color: #00c2cb;
  text-align: center;
  font-weight: 900;
  -webkit-text-stroke-color: #98ddca;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    margin: 3rem 20rem;
  }
`;

export const Card = styled.div`
  width: 20rem;
  background-color: white;
  border-radius: 0.25rem;
  padding-bottom: 2rem;
  text-align: center;
`;

export const CardHeader = styled.p`
  background-color: #98ddca;
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
  padding: 1rem 0;
  margin: 0;
  border-bottom: 2px black solid;
  color: white;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-weight: 600;
  height: 3.25rem;
  font-size: 1.25rem;
  background-color: #9d0191;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0 0.75rem;
  margin-top: 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
