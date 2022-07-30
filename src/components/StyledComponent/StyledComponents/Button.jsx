import React, { Children } from "react";
import styled, {css, keyframes} from "styled-components";

const roteteAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
25% {
    transform: rotateZ(2deg);
    box-shadow: 0 -10px 10px #9999ef;
}
50% {
    transform: rotateZ(-2deg);
    box-shadow: 0 -10px 10px #ef9999;
}
75% {
    transform: rotateZ(2deg);
    box-shadow: 0 -10px 10px #9999ef;
}
100% {
    transform: rotateZ(0deg);
    box-shadow: 0 -10px 10px #ef9999;
}
`

const StyledButton = styled.button`
border: none;
outline: none;
padding: 10px;
cursor:pointer;
border-radius: 10px;
font-size: 20px;
margin: 0 90px 0;
&: hover {
    animation: ${roteteAnimation} 1s infinite linear;
}
${props => props.primary && css`
color: ${props => props.color || "black"};
// here the example how to use global variables
background-color: ${props => props.background || props.theme.colors.primary};
`}
${props => props.outlined && css`
color: ${props => props.color || "black"};
border: 1px solid ${props => props.color || "white"};
background-color: transparent;
`}

// here the example how to use media querys 
@media ${props => props.theme.media.phone} {
border: 2px solid blue;
}

@media ${props => props.theme.media.tablet} {
   border: 2px solid red;
}
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;