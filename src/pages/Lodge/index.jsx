import { styled } from "styled-components"
import { useParams } from "react-router-dom"
import colors from '../../utils/style/colors'
import lodgings from '../../datas/lodgings.json'
import Collapse from "../../components/Collapse"
import Tag from "../../components/Tag"
import Rate from "../../components/Rate"
import { useState, useEffect } from "react"
// import Slideshow from "../../components/SlidesHow"

const LodgeImg=styled.div`
max-width:1240px;
margin: 25px 20px 0 20px;
height:255px;
border-radius:10px;
background-color:${colors.secondary}
@media (min-width:768px){
    height:415px;
}
`


const LodgeHeader= styled.div`
max-width:1240px;
margin:25px 20px 20px 20px;
color:${colors.primary};
display:flex;
flex-direction:column;
// align-items:center;

@media (min-width:768px){
    flex-direction:row;
    justify-content:center;
`

const LodgeHeaderLeft=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
@media (min-width:768px){
    flex:1;
`

const LodgeHeaderRight=styled.div`
display:flex;
flex-direction:row;
align-items:center;
@media (min-width:768px){
    flex:1;
    flex-direction:column-reverse;
    align-items:flex-end;
    
`

const LodgeTitle=styled.h1`
font-weight:500;
font-size:18px;
width:100%;
@media (min-width:768px){
margin-top:0px;
margin-bottom:0px;
font-size:36px;
line-height:51px;
}`

const LodgeLocation=styled.h2`
font-size:14px;
font-weight:500;
line-height:20px;
@media (min-width:768px){
font-size:18px;
line-height:26px;}
`

const TagContainer=styled.ul`
display:flex;
justify-content:flex-start;
width:100%;
margin-right:20px;
padding-left:0;
overflow:scroll;
`

const RateContainer=styled.div`
display:flex;
// justify-content:flex-start;
align-items:center;
flex:1;
height:100%;

`

const HostContainer=styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
flex:1;

`
const HostName=styled.div`
width:80px;
display:flex;
align-items:center;
justify-content:flex-end;
text-align:right;
margin-right:15px;
font-size:12px;
line-height:17px;
@media (min-width:768px){
font-size:18px;
line-height:26px;
}
`

const HostPicture=styled.img`
width:32px;
height:32px;
border-radius:16px;
background-color:${colors.secondary}
objectif-fit:cover;
@media (min-width:768px){
    width:64px;
    height:64px;
    border-radius:32px;
}
`

const DescriptionContainer=styled.div`
max-width:1240px;  
margin-right:20px;
margin-left:20px;  
display:flex;
flex-direction:column;
align-items:center;
  
@media (min-width:768px){
    flex-direction:row;
    margin-right:unset;
    margin-left:unset;
    align-items:flex-start;
    justify-content:space-between;
  }

  .description_font-size{
    font-size:12px;
    @media (min-width:768px){
        font-size:18px;
    }
  }

`

const EquipementList=styled.ul`
    width:100%;
    padding: 35px 20px 0px 15px;
    list-style:none;    
    display-flex;
    justify-content:flex-start;
    margin-bottom:
    @media (min-width:768px){
            padding: 35px 20px 10px 15px;
    
        }
`



function Lodge(){
    const currentLodgeId=useParams()
        // console.log(currentLodgeId)
    const[lodge,setLodge]=useState({})
    
    useEffect(()=> {
    const lodge=lodgings.find((elem)=> elem.id===currentLodgeId.id)
        setLodge(lodge)
    }, [currentLodgeId])
        // console.log(lodge)
    return (
        <>
            <LodgeImg>
                {/* <Slideshow></Slideshow> */}
            </LodgeImg>

            <LodgeHeader>

                <LodgeHeaderLeft>
                    <LodgeTitle>{lodge.title} </LodgeTitle>
                    <LodgeLocation>{lodge.location}</LodgeLocation>
                    <TagContainer>
                        {lodge.tags?.map((tag, i)=>(
                            <Tag key={i} item={tag} />
                        ))}
                    </TagContainer>
                </LodgeHeaderLeft>

                <LodgeHeaderRight>
                    <RateContainer>
                        <Rate rate={lodge.rating}></Rate>
                    </RateContainer>
                    <HostContainer>
                        <HostName>{lodge.host?.name}</HostName>
                        <HostPicture src={lodge.host?.picture} alt='Photo du propriétaire'></HostPicture>
                    </HostContainer>
                </LodgeHeaderRight>
            
            </LodgeHeader>
            
            <DescriptionContainer>
                <Collapse label='Description'>
                    <p className="padding description_font-size ">{lodge.description}</p>
                </Collapse>
                <Collapse label='Equipements'>
                    <EquipementList className='description_font-size'>
                        {lodge.equipments?.map((item, i)=>(
                            <li key={i}>{item}</li>                       
                        ))}
                    </EquipementList>
                </Collapse>
            </DescriptionContainer>

        </>
    )


}

export default Lodge