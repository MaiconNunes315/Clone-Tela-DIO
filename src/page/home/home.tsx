import { HomeContainer } from "./style";
import backgroundHome from '../../assets/background-home.png'
import { ButtonContainer } from "../../components/button/style";
import { Link } from "react-router-dom";


export default function Home() {



  return (
      <HomeContainer>
        <div className="paragraphs">
            <p className="first-paragraph">Implemente</p>
            <p className="second-paragraph">o seu futuro global agora!</p>
            <p className="last-paragraph">Domine as tecnologias utilizadas pelas empresas mais
              inovadoras do mundo e encare seu novo desafio profissional,
              evoluindo em comunidade com os melhores experts.
            </p>
          <Link to={"/login"} style={{textDecoration:"none"}}>
            <ButtonContainer className="button-container">
              Começar agora
            </ButtonContainer>
          </Link>
        </div>
        
        <img src={backgroundHome} alt="dio"/>

    </HomeContainer>
  )
}
