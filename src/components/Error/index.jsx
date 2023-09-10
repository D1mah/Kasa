import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { StyledLink } from '../../utils/style/Bounds'
import colors from "../../utils/style/colors"
// import ErrorIllustration from "../../assets/404.svg"



const ErrorContainer= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:${colors.primary};
`

const ErrorPageTitle= styled.h2`
    font-weight:700;
    font-size: 96px;
    line-height:147px;
    margin-bottom:-15px;
    @media(min-width:768px){
        font-size:288px;
        line-height:411px;
        margin-top:65px;
}
`



const Errortxt= styled.h3`
    text-align:center;
    font-weight:500;
    font-size:18px;
    line-height:26px;
    margin-top:0px;
    @media(min-width:768px){
        font-size:36px;
        line-height:52px;
`

const StyledLink=styled(Link)`
margin-top:100px;
color:${colors.primary};
font-size:14px;
font-weight:500;
line-height:20px;
margin-bottom:250px;
text-decoration:underline solid 1px;
@media(min-width:768px){
    font-size:18px;
    line-height:26px;
    margin-bottom:140px;
`



function Error() {
  return (
    <ErrorContainer>
      <ErrorPageTitle>404</ErrorPageTitle>
      <Errortxt>Oups! La page que vous demandez n'existe pas.</Errortxt>
      <StyledLink to="/">Retourner sur la page d’accueil </StyledLink>
    </ErrorContainer>
  )
}

export default Error
