import styled from "styled-components";

export const HomeContainer = styled.div`

    height:95vh;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:#1E192C;

    @media screen and (max-width:980px){
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;

        .paragraphs{
            margin-top:100px;
        }

        img{
            margin-top:100px;
            
        }
    }

   .first-paragraph{
    color:#E4105D;
    font-family: Open Sans;
    font-size: clamp(25px,4vw, 32px);
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    width:368px;
    

   }

   .second-paragraph{
    color:#ffffff;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: clamp(25px, 4vw, 32px);
    line-height: 44px;
    width:368px;
   }

   .last-paragraph{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: clamp(10px, 1vw, 16px);
    line-height: 22px;
    width:368px;
    color: #FFFFFF;
    margin-top:13px;
   }

   img{
    width:40%;
    margin-right:60px;
    min-width:400px;
   }

   .button-container{
    width:177px;
    height:41px;
    margin-top:50px;
    
   }
`