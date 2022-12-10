import styled from "styled-components";

export const FeedStyle = styled.div`

background: #1E192C;
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
position: relative;
padding:100px 0 0 60px;

>h2{
    color:#fff;
    font-family: "Open Sans";
    position: absolute;
    height: 50px;
    left: 60px;
    top: 50px;

}

>div{
    min-width: 350px;
}



`

export const RankingContainer = styled.div`

margin-right: 60px;
>h2{
    color:#fff;
    font-family: "Open Sans";
}

` 

export const RankingProfile = styled.div`



display: flex;
margin-top: 20px;
gap: 15px;
height: auto;

h4{

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    

}


.front{
width: 120px;
height: 10px;
border-radius: 10px;

margin-top: 5px;
background-color: #ffffff;
position: relative;
content: "";

.background{
    background-color: #23DD7A;
    position: absolute; 
    height: 10px;
border-radius: 10px;
    content: "";
}
}


`