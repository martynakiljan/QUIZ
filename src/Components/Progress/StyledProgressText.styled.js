import styled from 'styled-components';

const StyledProgressText = styled.h2`
  
  color: ${({ theme }) => theme.greyStronger};
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 100%;
  text-align: center;
  padding: 20px;
  font-weight: ${({ theme }) => theme.light};

 

`;

export default StyledProgressText