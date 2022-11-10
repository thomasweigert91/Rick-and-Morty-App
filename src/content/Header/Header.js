import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Rick and Morty App</Heading>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  position: fixed;
  z-index: 5;
  height: 10%;
  top: 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

export { Header };
