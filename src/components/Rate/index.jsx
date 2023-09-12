import { styled } from "styled-components";
import colors from "../../utils/style/colors";
// Get our fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import {faStar as emptyStar} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RateContent= styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;

.fullStar{
    color:${colors.primary};
    padding-right:5px;
}
.emptyStar{
    color:#E3E3E3;
}

@media (min-width:768px){
    justify-content:flex-end;
    padding-right:5px;
}
`

function Rate(props){
    const options=[1,2,3,4,5]
    const rate=props.rate
    return (
        <RateContent>
        {options.map((note, i)=> {
            if (note<=rate) {
                return (<FontAwesomeIcon key={i} className="fullStar" icon={faStar}/>)
            }
            return (<FontAwesomeIcon key={i} className="emptyStar" icon={faStar} />)
        })}
        </RateContent>
    )
}

export default Rate



