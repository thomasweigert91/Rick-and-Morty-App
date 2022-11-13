import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/bookmark">Bookmark</NavigationItem>
      <NavigationItem to="/random">Random</NavigationItem>
    </NavigationContainer>
  );
};
const NavigationContainer = styled.section`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 5;
  height: 10%;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colorFirst};
  border-top: 1px solid ${(props) => props.theme.colorSecond}; ;
`;

const NavigationItem = styled(Link)`
  background-color: ${(props) => props.theme.colorLight};
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export { Navigation };
