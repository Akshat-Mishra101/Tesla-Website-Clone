import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section(props) {

    return (
        <Wrap bgimg={props.img}>
            <Fade bottom>
         
       
           <ItemText>
               <h1>{props.title}</h1>
               <p>{props.description}</p>

           </ItemText>
           </Fade>
           <Buttons>
           <Fade bottom>
           <ButtonGroup>
              <LeftButton>
                             {props.leftbtntext}
                         </LeftButton>
                        { props.rightbtntext && //Short Circuit Evaluation, if the text is available, then it creates the html
                         <RightButton>
                             {props.rightbtntext}
                         </RightButton>
                             }   
                        
           </ButtonGroup>
             </Fade>  

           <DownArrow src="/images/down-arrow.svg" alt="arrow down">

           </DownArrow>
           </Buttons>
        </Wrap>
    )
}
const Buttons = styled.div`

`;
const DownArrow = styled.img`

height:40px;
animation: animateDown infinite 1.5s;
overflow-x:hidden;
`;
export default Section;
const Wrap =styled.div`

width: 100%;
height: 100%;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
background-image: ${props => `url("/images/${props.bgimg}")`}
`;
const ItemText = styled.div`
padding-top:15vh;
text-align:center;

`;
const ButtonGroup = styled.div`

display:flex;

justify-content:center;
margin-bottom:30px;
@media (max-width: 768px){
    align-items:center;
    flex-direction:column;
}
`;
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
color:white;
height:40px;
display:flex;
justify-content:center;
align-items:center;
width:256px;
border-radius:100px;
opacity:0.85px;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`;
const RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`;