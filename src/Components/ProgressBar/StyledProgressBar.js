
 import styled from "styled-components";

 export const ContainerStyles = styled.div`
    height: 20px;
    width: 50%;
    background-color: #e0e0de; 
    border-radius: 50px;
    margin: 0 auto;
 `;
 
 export const FillerStyles = styled.div`
    height: 100%;
    width: ${props => props.progressDegree}%;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(133,253,45,1) 100%);
    transition: width 1s ease-in-out;
    border-radius: inherit;
    text-align: right;
  
  
 `
 export const LabelStyles = styled.span`
    padding: 5px;
    color: #ffffff;
    font-weight: bold;
   
 
 `;
 