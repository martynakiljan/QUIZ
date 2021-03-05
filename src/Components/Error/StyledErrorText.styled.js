import styled, { keyframes } from 'styled-components'


const breatheAnimation = keyframes`
  from {
    margin-left: 100%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`

const StyledErrorText = styled.p`
  
  color: ${({ theme }) => theme.errorColor};
  text-align:center;
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  animation-name: ${breatheAnimation};
  animation-duration: 1s;


`;


export default StyledErrorText