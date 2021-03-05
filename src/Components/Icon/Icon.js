import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import StyledIconContainer from './StyledIconContainer.styled'



const Image = () => {
    return (
        <StyledIconContainer>
          <FontAwesomeIcon className="iconFontAwesome" icon={faQuestion} />
        </StyledIconContainer>
    )  
}


export default Image