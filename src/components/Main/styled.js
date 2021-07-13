import styled from 'styled-components';
import preBlackFriday from '../../assets/images/callout_black_friday.png';

export const Main = styled.main`
  background-color: #9d0191;
  height: 80vh;
  background-image: url(${preBlackFriday});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Newsletter = styled.input`
  width: 50%;
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;

  margin-bottom: 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 3rem;
`;
