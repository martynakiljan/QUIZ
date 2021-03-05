import React  from 'react';
import StyledResultsBox from '../ResultsBox/StyledResultsBox.styled'
import GlobalStyle from '../../theme/GlobalStyle'

function ResultsBox({children})  {

    return (
        <>
     {/* <GlobalStyle/> */}
        <StyledResultsBox>
            <h2 className="resultsTitle">results</h2>
            {children}
        </StyledResultsBox>
        </>
        
    )
    
}

export default ResultsBox