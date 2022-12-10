import Card from "../../components/card/Card";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "../../components/card/style";
import { FeedStyle, RankingContainer, RankingProfile } from "./style";

export default function Feed() {


  return (
    <FeedStyle>
      <h2 translate="no">Feed</h2>
      <Card />

      <RankingContainer>
      <h2># Ranking Top 5 da semana</h2>
        <RankingProfile>
          <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf8JQ03uImWos_jnR9cRqivwYsP8q6bWbAg&usqp=CAU" />
          <div>
            <h4>Maicon Nunes</h4>

            <div className="front">
              <div className="background" style={{width:"50%"}}></div>
            </div>

          </div>
          
        </RankingProfile>
        <RankingProfile>
          <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf8JQ03uImWos_jnR9cRqivwYsP8q6bWbAg&usqp=CAU" />
          <div>
            <h4>Maicon Nunes</h4>

            <div className="front">
              <div className="background" style={{width:"50%"}}></div>
            </div>

          </div>
          
        </RankingProfile>
      </RankingContainer>

    </FeedStyle>
      
  
    
      
  )
}
