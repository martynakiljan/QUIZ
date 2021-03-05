import styled from 'styled-components';

const StyledQuestionText = styled.p`
  
  color: ${({ theme }) => theme.greyStronger};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  padding: 10px;
  font-weight: ${({ theme }) => theme.light};

 

`;

export default StyledQuestionText