import styled from "styled-components";

export const LoginContainer = styled.div`

    height:95vh;
    background-color:#1E192C;
    display:flex;
    justify-content:space-around;
    align-items:center;



    @media screen and (max-width:748px){

        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 100px;

       >p{
        display: none;
       }
    }




    > p{
        font-family: Open Sans;
        font-size: clamp(10px,2vw,32px);
        font-weight: 700;
        line-height: 44px;
        text-align: left;
        color: #FFFFFF;
        min-width: 250px;
        width:32%;
        margin-bottom: auto;
        margin-top: 170px;
        
    }

    .paragraph-container{
        font-family: Open Sans;
        font-size: clamp(10px,2vw,32px);
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;    
        
    }

    span{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: clamp(5px, 1.2vw, 18px);
    line-height: 25px;
    
    color: rgb(255,255,255);
    }

    >div{
        width:20%;
        min-width: 280px;
        max-width: 320px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 200px;
    }

    input{
        width: 95%;
        padding-left: 20px;
        
    }


    .button{
        margin-top: 30px;
        width: 80%;
        align-self: center;
        height: 45px; 
    } 

    form{
        display: flex;
        flex-direction: column;
        width: 110%;
        gap: 10px;
    }

    .links{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 10px;
    }

    .link-one{
        
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
    }

    .finish{
        color: #FFFFFF;
        font-family: Open Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
    }

    .finish p:nth-child(2){
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 10px;

    }

    .finish p span{
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color:#23DD7A;
    }
`