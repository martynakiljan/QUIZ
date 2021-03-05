import styled from 'styled-components';

const StyledResultsBox = styled.div`

  background-color: ${({ theme }) => theme.mainColor};
  margin: 0 auto;
  width: 90%;
  min-height: 100vh;
  border-radius: 10px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 5px #c8c8c8,
            inset 5px 5px 5px #ffffff;
  
 

`;

export default StyledResultsBox