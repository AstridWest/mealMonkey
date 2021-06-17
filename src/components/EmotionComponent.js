/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';


const EmotionComponent = ({large}) => {

    const anne = css`
        background-color: antiquewhite;
        color: grey;
        padding: ${ large ? "2em 0" : "0"};

        &:hover{
            background-color: beige;
        }
        & h1 {
            color: coral; 
        } 
    `
    /*const anneheadline = css`
        color: coral;
    `*/
    
    return ( 
        <div css={anne}>
            <h1>Hej fra emotion</h1>
            <p>Det her er også styling</p>
        </div>
     );
}
 
export default EmotionComponent;