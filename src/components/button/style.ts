import styled from "styled-components";

export const ButtonContainer = styled.button`


    
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        width:99%;
        height:99%;
        background-color:#E4105D;
        border-radius: 27px;
        border-width: 2px;
        cursor:pointer;
        outline:1px solid #E4105D;
        outline-offset: 1px;
        
        &:hover{
            box-shadow: 0 0 10px #E4105D;
        }
    
        &:disabled{
            background-color:#565656 ;
            opacity: 0.3;
            outline:1px solid #565656;
            outline-offset: 3px;
            
            &:hover{
                box-shadow: 0 0 0 0;
                cursor: default;
            }
        }

`