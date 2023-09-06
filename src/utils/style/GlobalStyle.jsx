import { createGlobalStyle } from 'styled-components';
import './fonts/Montserrat/stylesheet.css'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        margin: 0;  
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle/>
}

export default GlobalStyle