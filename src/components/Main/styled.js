import styled from 'styled-components';
import preBlackFriday from '../../assets/images/callout_black_friday.png';

export const Main = styled.main`
  background-color: #9d0191;
  height: 80vh;
  flex-direction: column;
  background-image: url(${preBlackFriday});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    height: 100vh;
  }
`;

export const Callout = styled.p`
  text-transform: uppercase;
  cursor: default;
  color: white;
  font-weight: 700;
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  width: max-content;
  margin: 0;
`;

export const CalloutContainer = styled.section`
  margin-top: 6rem;
  background-color: black;
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
`;

export const NewsletterContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 60%;
`;

export const Email = styled.input`
  cursor: text;
  width: 40%;
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  font-size: 1.5rem;

  box-shadow: inset 1px 1px rgb(255 255 255 / 20%),
    inset -1px -1px rgb(255 255 255 / 10%), 1px 3px 24px -1px rgb(0 0 0 / 15%);

  &:focus,
  &:active {
    background-color: white;
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-weight: 600;
  height: 3.25rem;
  font-size: 1.5rem;
  background-color: #9d0191;
  border-radius: 0 0.25rem 0.25rem 0;
  border: 1px solid transparent;
  padding: 0 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
