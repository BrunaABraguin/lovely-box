import styled from 'styled-components';
import preBlackFriday from '../../assets/images/callout_black_friday.png';

export const Main = styled.main`
  background-color: #9d0191;
  height: 80vh;
  flex-direction: column;
  background-image: url(${preBlackFriday});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Callout = styled.p`
  color: white;
  font-weight: 700;
  font-size: 2.7rem;
  display: flex;
  justify-content: center;
  width: max-content;
  margin: 0;

  -moz-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -moz-animation: scroll-left 2s linear infinite;
            -webkit-animation: scroll-left 2s linear infinite;
            animation: scroll-left 20s linear infinite;
        }
        
        @-moz-keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
            }
        }
        
        @-webkit-keyframes scroll-left {
            0% {
                -webkit-transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-100%);
            }
        }
        
        @keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
`;

export const CalloutContainer = styled.section`
  margin-top: 6rem;
  background-color: black;
  padding: 0.8rem 0;
`;

export const NewsletterContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 60%;
`;

export const Email = styled.input`
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
