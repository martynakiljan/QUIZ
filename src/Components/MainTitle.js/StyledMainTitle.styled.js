import styled from 'styled-components';

const StyledMainTitle = styled.h1`
  
  color: ${({ theme }) => theme.grey300};
  width: 100%;
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
 

`;

export default StyledMainTitle