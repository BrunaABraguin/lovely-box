import styled from 'styled-components';

export const Header = styled.header`
  background-color: black;
  padding: 0.7rem 4rem 0.7rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.img`
  width: 10rem;

  @media (max-width: 1024px) {
    width: 8rem;
  }
`;

export const LogoContainer = styled.div`
  width: 80%;
`;

export const Login = styled.a`
  font-weight: 800;
  color: white;
  width: 13%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
`;

export const Links = styled.section`
  margin: 0.7rem 3.4375rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.875rem;
  width: 5%;

  @media (max-width: 1024px) {
    margin: 0.7rem 3.4375rem;
    width: 15%;
    font-size: 1.3rem;
  }
`;
