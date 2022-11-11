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
`;

const NavigationItem = styled(Link)``;

export { Navigation };
