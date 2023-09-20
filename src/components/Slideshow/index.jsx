import { styled } from "styled-components";
import { useState } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SlideshowContainer=styled.div`
max-width:1240px;
position:relative;
border-radius:10px;
height:255px;
@media (min-width:768px){
   border-radius:25px;
    height:415px; 
}

`

const SlideshowImgContainer= styled.div`
width:100%;
height:255px;
border-radius:10px;
position:absolute;
@media(min-width:768px){
    border-radius:25px;
    height:415px;
}
`

const SlideshowImg=styled.img` 
object-fit:cover;
width:100%;
height:100%;
border-radius:10px;
@media(min-width:768px){
    border-radius:25px;
}

`

const NextImg=styled.button`
position:absolute;
z-index:1;
right:0px;
top:50%;
transform: translate(-50%,-50%);

background-color:transparent;
border:none;
color: white;
cursor:pointer;
font-size:18px;
@media(min-width:768px){
    font-size:72px;
    // right: 
}
`

const PrevImg=styled.button`
position:absolute;
z-index:1;
border:none;
left:20px;
top:50%;
transform: translate(-50%,-50%);
background-color:transparent;
cursor:pointer;
color: white;
font-size:18px;
@media (min-width:768px){
    font-size:72px;
    left:55px;
}
`

const ImgNumber=styled.span`
position:absolute;
bottom:10px;
left:50%;
color:white;
transform: translate(-50%,-50%);
`


function Slideshow({pictures}){
    const [currentImg, setCurrentImg]=useState(0)
    const picturesLength=pictures?.length
    
    const prevImg=()=>{
        setCurrentImg(currentImg===0?picturesLength-1 : currentImg-1)
    }

    const nextImg=()=>{
            setCurrentImg(currentImg=== picturesLength-1 ? 0: currentImg +1)
    }
    
    if (picturesLength===0){
        return null
    }
        
    return(

            
        <SlideshowContainer>
                {picturesLength >1 && (<PrevImg onClick={prevImg}><FontAwesomeIcon icon={faChevronLeft}/></PrevImg>) }
                {picturesLength >1 && (<NextImg onClick={nextImg}><FontAwesomeIcon icon={faChevronRight}/></NextImg>) }   
                {pictures?.map((picture, index)=>{
                    return (
                        <SlideshowImgContainer key={index}>
                            {(index===currentImg) && (<SlideshowImg src={picture} alt="propriété"/>)}
                            {(index === currentImg) && (<ImgNumber>{currentImg +1} / {picturesLength}</ImgNumber>)}
                        </SlideshowImgContainer>
                        )
                    })}        
                
        </SlideshowContainer>
                
    )
                        
                
}            
            
export default Slideshow            