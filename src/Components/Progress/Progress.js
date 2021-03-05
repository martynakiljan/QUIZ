import React  from 'react';
import StyledProgressText from './StyledProgressText.styled'

function Progress({total, currentQuestion})  {
    return (
        <StyledProgressText>How well do you know your European capitals?  {currentQuestion} of {total}</StyledProgressText>
    )
}

export default Progress