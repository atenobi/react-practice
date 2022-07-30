import React from "react";
import styled from "styled-components";

// styled components
import Title from "./StyledComponents/Title";
import Flex from "./StyledComponents/Flex";
import Button from "./StyledComponents/Button";

const Wrapper = styled.div`
  width: 95%;
  min-height: 10vh;
  padding: 2rem;
  margin: 0 auto;
  background-color: #000000;
`;

const StyledComponent = () => {
  return (
    <Wrapper>
      <Flex justify={"center"} align={"center"}>
        <Title color={"white"} border={"1px solid #c7c4c4"} hover={"black"}>
          Children automaticaly fill from props. And we can put some special
          style values also from props.
        </Title>
        <Button primary color={"#a8a8ff"}>police</Button>
      </Flex>
    </Wrapper>
  );
};

export default StyledComponent;
