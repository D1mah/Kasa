import colors from "../../utils/style/colors";
import { styled } from "styled-components";

const TagContainer=styled.li`
height:25px;
border-radius:10px;
background-color:${colors.primary};
color:white;
padding-left:22px;
padding-right:22px;
margin-right:20px;
display:flex;
justify-content:center;
align-items:center;
font-size:10px;
line-height:15px;
white-space:nowrap;
@media (min-width:768px){
font-size:14px;
line-height:20px;
}
`

function Tag(props){
    return <TagContainer>{props.item}</TagContainer>

}

export default Tag