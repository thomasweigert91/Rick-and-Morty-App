import styled from "styled-components";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationItem>Nav1</NavigationItem>
      <NavigationItem>Nav2</NavigationItem>
      <NavigationItem>Nav3</NavigationItem>
      <NavigationItem>Nav4</NavigationItem>
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

const NavigationItem = styled.div``;

export { Navigation };
