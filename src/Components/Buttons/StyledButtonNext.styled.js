import styled, { keyframes } from 'styled-components'



const blinkingText = keyframes`
  0%		 { color: #39AF35;}
  25%		{ color: #282828;}
  50%		{ color: #39AF35;}
  75%		{ color: #282828;}
  100%	{ color: #39AF35;}
  }
`


const StyledButtonNext = styled.button`
margin-top: 15px;
display: flex;
justify-content: center;
align-items:center;
border-radius: 45px;
background: white;
border-radius: 7px;
background: #ebebeb;
outline: none;
box-shadow: inset 8px 8px 16px #b7b7b7,
inset -8px -8px 16px #ffffff;
height: 37px;
border: none;  
margin-bottom: 15px;
margin: 0 auto;
padding: 15px  25px 15px 25 px;
text-transform: uppercase;
animation: ${blinkingText} 3s ease-in infinite;;
font-weight: ${({ theme }) => theme.bold};
margin-top: 20px;


  &:hover {
    border-radius: 3%;
    background: #ffffff;
    box-shadow: inset 10px -10px 40px #e8e8e8,
     inset -10px 10px 40px #ffffff;
 }


`;

export default StyledButtonNext;
