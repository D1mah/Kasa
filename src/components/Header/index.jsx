import Logo from '../../assets/LOGO.png'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Bounds'


const StyledLogo= styled.img`
height:47px;
width:145px;

    @media (min-width :768px){
    height:68px; 
    width:210px;
    }
`

const HeaderNavContainer=styled.nav`
padding: 20px 20px 0 20px;
display:flex;
justify-content: space-between;
align-Items: center;

    @media (min-width:768px){
        padding:20px;
        text-transform:capitalize;    
        
        .space {
          width:270px;
          display:flex;
          justify-content:space-between;
        }
    }



`

function Header() {
    return (<HeaderNavContainer>
        <Link to='/'>
          <StyledLogo src={Logo} alt='logo Kasa'></StyledLogo>
        </Link>
        <div className="space">
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A Propos</StyledLink>
          
        </div>
      </HeaderNavContainer>
    )
    
}

export default Header
