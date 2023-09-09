import styled from 'styled-components'
import img from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash2.png'
import Collapse from '../../components/Collapse'

const AboutHeader=styled.div`
        margin:20px;
        // padding:20px;
`

const AboutImage=styled.img`
    width:100%;
    height:220px;
    border-radius:25px;
    object-fit:cover;
    filter:brightness(.75);
`

const CollapseMain=styled.div`   
display:flex;
    flex-direction:column;
    align-items:center;
    .padding{
    padding: 35px 20px 40px 15px;
    @media (min-width:768px){
        padding: 35px 20px 10px 15px;

    }
    }
`



function About(){
    return (
        <div>
            <AboutHeader>
                <AboutImage src={img} alt="Photo de paysage alpin" />
            </AboutHeader>
            
            <CollapseMain>

                        <Collapse label="Fiabilité">
                            <p className="padding">
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                            </p>
                        </Collapse>

                        <Collapse label="Respect">
                            <p className="padding" >
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. 
                            </p>
                        </Collapse>
                        <Collapse label="Service">
                            <p className="padding" >
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                            </p>
                        </Collapse>
                        <Collapse label="Sécurité">
                            <p className="padding">
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        </Collapse>
            </CollapseMain>
        </div>
    )
}

export default About