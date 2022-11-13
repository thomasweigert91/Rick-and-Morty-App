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
  border-bottom: 1px solid ${(props) => props.theme.colorLight};
  position: fixed;
  z-index: 5;
  height: 10%;
  top: 0;
  background-color: ${(props) => props.theme.colorFirst};
  z-index: 4;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colorThird};
  text-shadow: 0 1px 6px ${(props) => props.theme.colorThird}; ;
`;

export { Header };
