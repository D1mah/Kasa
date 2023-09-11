import { createGlobalStyle } from 'styled-components';
import './fonts/Montserrat/stylesheet.css'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        max-width: 1240px;
        margin:auto;  
    }

    // pour centrer les paragraphes dans les collapses et maintenir le contenu des collapses neutre.
    .padding{
        padding: 35px 20px 40px 15px;
            @media (min-width:768px){
                padding: 35px 20px 10px 15px;

        }
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle/>
}

export default GlobalStyle