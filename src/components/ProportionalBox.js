import styled from "styled-components";

export default styled.img`
    display:block;
    position: relative;
    width: 100%;
    padding-top: ${props => props.height ? props.height : "52%"};
    background-color: orange;

    
    ${props => props.overlay}

`