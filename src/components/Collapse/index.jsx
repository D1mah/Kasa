import styled  from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'

// Get our fontawesome imports
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const chevronIcon=

const CollapseTitle=styled.h2`
    font-size:13px;
    line-height:19px;
    font-weight:500;
    @media (min-width:768px){
        font-size:24px;
    }
`

const CollapseFormat=styled.div`
    max-width:1023px;
    padding:0 20px 0 20px ;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
`

const CollapseHeader= styled.button`
width:100%;   
z-index:1; 
border:none;
    
    background-color:${colors.primary};
    color:white;
    height:45px;
    border-radius: 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left: 15px;
    padding-right:15px;
    margin-bottom:20px ;
    cursor:pointer;
`
const CollapseContent=styled.p`
// position:relative;   
width:100%;
    margin-top:-55px;
    margin-bottom:20px;
    background-color:${colors.secondary};
    color:${colors.primary};
    border-radius:10px;
    font-size:12px;
    font-weight:400;
    line-height:17px;
    @media (min-width:768px){
        font-size:24px;
        line-height:34px;
    }
    
    
`

function Collapse(props){
    const [open, setOpen]=useState(false);
    
    const showHide=()=>{setOpen(!open);}

    return(
        <CollapseFormat>
            <CollapseHeader onClick={showHide}>
                <CollapseTitle> {props.label}</CollapseTitle>
                <FontAwesomeIcon icon={faChevronDown}/>
            </CollapseHeader>
            {open && (
                <div className="showHide">
                    {/* <h3>Du contenu</h3> */}
                    <CollapseContent>{props.children}</CollapseContent>
                </div> 
            )}
        </CollapseFormat>
    )
}

export default Collapse