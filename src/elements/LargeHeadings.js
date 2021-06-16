import styled from "styled-components";

//props:theme from theme provider
//props.color from component prop

export default styled.h1`
font-size: 3em;
font-family: Arial, Helvetica, sans-serif;
color:${props => props.theme[props.color] };
`

