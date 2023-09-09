import styled from 'styled-components'
import img from '../../assets/IMG.png'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'

import DefaultPicture from '../../assets/profile.png'


const lodgeProfiles = [
    {
        title: 'Appartement cosy',
        picture: DefaultPicture,
    },
    {
        title: 'Magnifique appartement proche Canal Saint-Martin',
        picture: DefaultPicture,
    },
    {
        title: 'Studio de charme - Buttes Chaumont',
        picture: DefaultPicture,
    },
    {
        title: 'Fais-moi une nouvelle ligne stp',
        picture: DefaultPicture,
    },
]

const HomeHeader= styled.div `
    height:111px;
    margin:20px;
    border-radius:10px;
    // border: 1px solid #000;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img});
    background-blend-mode:darken;
    background-size: 700px  ;
    background-position: right 55% bottom 48%;
    display:flex;
    align-items:center;
        @media (min-width: 740px){
            background-size:cover;
            background-position:right 55% bottom 48%;
            justify-content:center;
            border-radius:25px;
            
        }
        @media (min-width:780px){
            height:220px;
            background-position:right 55% bottom 50%;

        }
`

const HomeHeaderText= styled.h1`
    color:white;
    font-size:24px;
    line-height:24px;
    padding-left:20px;
    padding-right:90px;
    @media (min-width:740px){
        font-size:32px;      
        padding-left:0px;
        padding-right:0px;
    }
    @media (min-width:780px){
        font-size:48px;
  
    }
`

const CardsContainer= styled.div`
// width:100%;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
margin: 30px 20px;

    @media (min-width:830px){
        padding: 45px 30px 20px 30px;
        // padding-bottom:20px;
        border-radius:25px;
        display:grid;
        grid-template-columns: repeat(auto-fill, 280px);
        grid-auto-flow: row;
        grid-auto-rows: 255px;
        row-gap: 30px;
        column-gap:100px;
        justify-content:center;
        background-color:${colors.secondary}
    }

    @media (min-width:1020px){
        justify-content:space-between;
        column-gap:unset;
    }

    @media (min-width:1160px){
        grid-auto-rows:340px;
        grid-template-columns: repeat(auto-fill, 340px);
        // column-gap:30px;
    }
`

function Home() {
    return (
        <div>
        <HomeHeader>
            <HomeHeaderText>Chez vous, partout et ailleurs</HomeHeaderText>
        </HomeHeader>
        <CardsContainer>
        {lodgeProfiles.map((lodge, index) => (
              <Card
                  key={`${lodge.title}-${index}`}
                  picture={lodge.picture}
                  title={lodge.title}
              />
            ))}
        </CardsContainer>
    </div>
    )
}

export default Home

