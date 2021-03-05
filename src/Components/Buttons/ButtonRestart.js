import React  from 'react';
import StyledButtonRestart from './StyledButtonRestart.styled'

function ButtonRestart({onClick})  {
    return (
        <StyledButtonRestart onClick={onClick}>Restart</StyledButtonRestart>
    )
}

export default ButtonRestart