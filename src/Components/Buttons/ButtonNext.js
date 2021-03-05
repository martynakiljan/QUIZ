import React  from 'react';
import StyledButtonNext from './StyledButtonNext.styled.js'

function ButtonNext({onClick})  {
    return (
        <StyledButtonNext onClick={onClick}>Confirm and Continue</StyledButtonNext>
    )
}

export default ButtonNext