/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Recent = () => {
    const textstyle = css`
        display:flex;

        & h1 {
            font-size: 2em;
        } 

    `

    return ( 
        <div css={textstyle}>
            <div>
                
            </div>

            <div>
                <h2>Headline Test</h2>
                <p>Text Test</p>

            </div>
        </div>
     );
}
 
export default Recent;