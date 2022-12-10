import styled from "styled-components";

export const HeaderContainer = styled.header`

    height:47px;
    background-color:#151515;
    overflow:hidden;
    display:flex;
    justify-content:space-between;
    padding:10px;

   
    ul{
        display:flex;
        margin-right:60px;
    }

    ul>a{
        text-decoration: none;
        
    }

    li{
        list-style:none;
        margin-left:17px;
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: clamp(10px, 3vw, 18px);
        line-height: 25px;
        color:#ffffff;
        background-color:#565656;
        border-radius:11px;
        padding:0 2.5vw 0 2.5vw;
        cursor:pointer;
        

        &:hover{
            background-color: #E4105D;
            color: #Efff;
        }
    }


    .active{
        background-color:transparent;
        padding:0 10px 0 10px;

     &:first-child:hover{
        background-color: transparent;
        color: #E4105D;
     }
     
    }
`