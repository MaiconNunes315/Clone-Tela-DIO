import { EnvelopeSimple } from 'phosphor-react';
import styled from "styled-components";

export const InputContainer = styled.label`

        position: relative;
        height: 50px;

        .icon{
            position: absolute;
            bottom:15%;
            left: 10px;
        }

input{
    background:transparent;
    height:100%;
    border:none;
    margin:10px;
    color: #fff;
    border-bottom: 1px solid #3B3450;
    font-size: 18px;


    &:focus{
        outline:0;
        box-shadow:0 0 0 0;
        outline:12px;
        border-bottom: 1px solid #8647AD;
        color: #fff;
        
    }

    &::placeholder{
        color:#fff;
        background-repeat: no-repeat;
        background-size: 10px;
        
    }
}
    
`