import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-transform:uppercase;
  padding: 10px 15px;
  text-decoration: none;
  font-size:12px;
  line-height:17px;
  
  &:hover{
        text-decoration: underline ${colors.primary};
  }

  @media (min-width: 768px){
    text-transform:capitalize;
    padding: 10px 15px;
    font-weight:500;
    font-size: 24px;
    text-align: center;
    
  }

`