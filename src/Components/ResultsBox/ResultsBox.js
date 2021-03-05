import React  from 'react';
import StyledResultsBox from '../ResultsBox/StyledResultsBox.styled'


function ResultsBox({children})  {

    return (
        <>
        <StyledResultsBox>
            <h2 className="resultsTitle">results</h2>
            {children}
        </StyledResultsBox>
        </>
        
    )
    
}

export default ResultsBox