import React from "react";
import styled from "styled-components";

// dinamically change some styles
const StyledTitle = styled.h4`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hover};
  }
`;

const Title = (props) => {
  // ! must delegate propses down to childrens !
  return <StyledTitle {...props}/>
};

export default Title;
