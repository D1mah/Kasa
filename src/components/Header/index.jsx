import { useEffect, useState } from 'react'
import Logo from '../../assets/LOGO.png'
import colors from '../../utils/style/colors'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
// import { StyledLink } from '../../utils/style/Bounds'

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-transform:uppercase;
  padding: 10px 15px;
  text-decoration: none;
  font-size:12px;
  line-height:17px;
  
  &:hover{
      transform:scale(1.1);
  }

  @media (min-width: 768px){
    text-transform:capitalize;
    padding: 10px 0 10px 15px;
    font-weight:500;
    font-size: 24px;
    text-align: center;
    
  }
  `

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
    .homeSelected{
      text-decoration: underline 1px ${colors.primary};
      &:hover {
        transform:scale(1);
      }
    }
    .aboutSelected{
      text-decoration: underline 1px ${colors.primary};
      &:hover {
        transform:scale(1);
      }
    }
    


`

function Header() {
  const [homeLocation,setHomeLocation]=useState("")
  const [aboutLocation,setAboutLocation]=useState("")

  // Text-decoration system for nav options in header according to the page rendered
   const page=useLocation()

   useEffect(()=>{  
    switch (page.pathname){
      case "/about":
        setAboutLocation("aboutSelected")
        setHomeLocation(null)
        break
      case "/":
        setHomeLocation("homeSelected")
        setAboutLocation(null)
        break
      default:
        setHomeLocation(null)
        setAboutLocation(null)    
      }
  },[page.pathname, aboutLocation, homeLocation])

  return (<HeaderNavContainer>
        <Link to='/'>
          <StyledLogo src={Logo} alt='logo Kasa'></StyledLogo>
        </Link>
        <div className="space">
          <StyledLink className={homeLocation} to="/">Accueil</StyledLink>
          <StyledLink className={aboutLocation} to="/about">A Propos</StyledLink>
          
        </div>
      </HeaderNavContainer>
    )
    
}

export default Header
