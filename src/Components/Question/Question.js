import React,{useContext}  from 'react';
import StyledQuestionText from './StyledQuestionText.styled'
import QuizContext from '../ContextQuiz/ContextQuiz'

function Question(props)  {

    const {state} = useContext(QuizContext)
    const {currentQuestion, questions} = state;
    const question = questions[currentQuestion]



    return  <StyledQuestionText>{question.question}</StyledQuestionText>
    
}

export default Question;