import styled from 'styled-components';

const AnswerContainer = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 47px;
  border: none;
  padding: 10px;
  width: 90%;
  color: ${({ theme }) => theme.greyStronger};
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  margin: 20px auto;
  border-radius: 6px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 5px #c8c8c8,
            inset -5px -5px 5px #ffffff;


  &:hover {
    background: white;
 }



`;


export default AnswerContainer;