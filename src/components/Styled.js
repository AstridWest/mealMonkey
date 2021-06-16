import {ThemeProvider} from "styled-components";
import LargeHeading from "../elements/LargeHeadings";
import ProportionalBox from "./ProportionalBox";

const theme = {
    primary: "goldenrod",
    secondary: "teal",
    warning: "red",
    alert: "orange",
    success: "green"
}

/*
const LargeHeading = styled.h1`
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    color:${props => props.theme[props.color]};

`*/

const Styled = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <section>
                <h1>Styled Components</h1>
                <LargeHeading color="primary" as="h3">Stor overskrift!</LargeHeading> 
                <input type="text" name="bla" id="bla" />
                <button>Create</button>

                <ProportionalBox>
                    <img src="" alt=""/>
                </ProportionalBox>
            </section>
        </ThemeProvider>
     );
}
 
export default Styled;