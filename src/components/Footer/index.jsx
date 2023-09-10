import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../assets/DARK-LOGO.png'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 62px;
    background-color:${colors.footerBackground};
        @media (min-width:768px){
            padding-top: 66px;
        }
`

const FooterLogo= styled.img`
height:47px;
width:145px;

    @media (min-width :768px){
    height:68px; 
    width:210px;
    }
`

const FooterText= styled.p`
    color: white;
    align: center;
    font-size:12px;
    line-height:17px;

    @media (min-width:768px){
        font-size:24px;
    line-height:34px;
    }
    
`

function Footer(){
    
        return(
        <FooterContainer> 
            <Link to='/'>
                <FooterLogo src={DarkLogo} alt='logo Kasa sombre'></FooterLogo>
            </Link>
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
        )
}

export default Footer