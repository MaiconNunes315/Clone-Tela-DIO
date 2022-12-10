import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "../../components/card/style";


export default function Card() {
    return (
      
      <CardContainer>
       
      <ImageBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWze2S9-SCmFf0aWxxuvkyo1ilxGU_uXp1B6YfC15MtNC6TN8pK36i_s1ba6aA2ng8NAA&usqp=CAU" />
      <Content>
        <UserInfo>
          <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf8JQ03uImWos_jnR9cRqivwYsP8q6bWbAg&usqp=CAU"/>
          <div>
            <h4>Maicon Nunes</h4>
            <p>há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTMl e CSS</h4>
          <p>Projeto feito para o curso de HTML e CSS no bootcamp dio global avanade...
            <strong>Saiba Mais</strong>
          </p> 
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>10</p>
      </HasInfo>
      </Content>
</CardContainer>
    )
}