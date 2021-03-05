import styled, { keyframes } from 'styled-components'

const blinkingText = keyframes`
  0%		 { color: #39AF35;}
  25%		{ color: #282828;}
  50%		{ color: #39AF35;}
  75%		{ color: #282828;}
  100%	{ color: #39AF35;}
  }
`

const StyledButtonRestart = styled.button`
display: flex;
justify-content: center;
align-items:center;
border-radius: 45px;
background: white;
background: linear-gradient(145deg, #FFFFFF, #CDCDCD);
border-radius: 28px;
background: #e0e0e0;
box-shadow:  5px 5px 10px #8d8d8d,
             -5px -5px 10px #ffffff;
border: none;  
margin: 0 auto; 
padding: 10px 35px 10px 35px;
margin-bottom: 20px;
animation: ${blinkingText} 3s ease-in infinite;;
font-weight: ${({ theme }) => theme.bold};
margin-top: 20px;


  &:hover {
    background: #ffffff;
    box-shadow: inset 10px -10px 40px #e8e8e8,
     inset -10px 10px 40px #ffffff;
 }


`;

export default StyledButtonRestart