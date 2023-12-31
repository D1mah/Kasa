import PropTypes from 'prop-types'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'


const CardTitle = styled.h2`
  font-size: 18px;
  line-height:26px;
  height:52px;
  font-weight: normal;
  margin-left:20px;
  margin-right:20px;
  margin-bottom:20px;
  color:white;
  align-self: flex-start;
`


// const CardWrapper contenant les propriétés à appliquer au survol de la card. que l'on utilisera dans Card()
const CardWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
  margin-bottom: 20px ;
  transform:scale(1);
  transition: transform 0.2s ease-in;
  width:100%;
  height:100%; 
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url(${props=>props.picture});
  background-size:cover;
  
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

`

// Fonction gérant les favoris
function Card({ title, picture }) {
  
    return (
      <CardWrapper picture={picture} >
        <CardTitle>
           {title} 
        </CardTitle>
      </CardWrapper>
    )
  }


Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps={
    title:'',
    picture: DefaultPicture
}
 
export default Card