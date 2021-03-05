
import React, {useReducer, useEffeState}  from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import Progress from '../Progress/Progress'
import {theme} from '../../../src/theme/mainTheme'
import { ThemeProvider } from 'styled-components';
import MainTitle from '../MainTitle.js/Maintitle'
import Icon from '../Icon/Icon'
import StyledFormContainer from '../ContainerForm/ContainerForm.styled'
import Question from '../Question/Question'
import Answers from '../Answer/Answers'
import ButtonNext from '../Buttons/ButtonNext'
import StyledErrorText from '../Error/StyledErrorText.styled'
import ResultsBox from '../ResultsBox/ResultsBox'
import ButtonRestart from '../Buttons/ButtonRestart'
import questions from '../../DataQuestion/dataQuestion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {ADD_ANSWER, SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_ERROR, SET_SHOW_RESULTS, RESET_QUIZ,} from '../../Reducers/ReducersType'
import quizReducer from '../../Reducers/quizReducer'
import ProgressBar from '../ProgressBar/ProgressBar'
import QuizContext from '../ContextQuiz/ContextQuiz'


function Quiz({children}) {

 


  const initialState = {
    progressDegree: 0,
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: ''
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)
  const {currentQuestion, currentAnswer, answers, showResults, error, progressDegree} = state;
  const question = questions[currentQuestion]



  const renderError = () => {
    if(!error) {
      return
    }

    return <StyledErrorText>{error}</StyledErrorText>

  }

  const renderResultMark = (question, answer) => {
    if(question.correct_answer === answer.answer) {

    return <FontAwesomeIcon className="icon-up" icon={faThumbsUp} />
    } 
    return  <FontAwesomeIcon className="icon-down" icon={faThumbsDown} />
  }

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find( 
        question => question.id === answer.questionID
     )
       return(
        <div key={question.id} className="results-panel">
          {question.question}   {renderResultMark(question, answer)}
        </div>
      )
    })
  }
  

  const restart = () => {
  
    dispatch({type: RESET_QUIZ})

  }

  const next = () => {

    const answer = {
      questionID: question.id, 
      answer: currentAnswer
    }

    if(!currentAnswer){
      dispatch({type: SET_ERROR , error: "Please select an option!" })
      return;
    }

    answers.push(answer)
    dispatch({type: ADD_ANSWER , answers})
    dispatch({type: SET_CURRENT_ANSWER , currentAnswer: ''})

  
    if (currentQuestion + 1 < questions.length) {
      dispatch({
          type: SET_CURRENT_QUESTION,
          currentQuestion: currentQuestion + 1,
          progressDegree: progressDegree + 10,
      });
   
      return;
  }
  dispatch({type: SET_SHOW_RESULTS, showResults: true});
};




  if(showResults) {
    return (
      
      
      <ResultsBox>
        <ButtonRestart onClick={restart}>{children}</ButtonRestart>
       <div> {renderResultsData()} </div>
      </ResultsBox>
      
    )

  } else {

    return (
      <QuizContext.Provider
      value=
      {{state, dispatch}}
      >
          
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MainTitle>{children}</MainTitle>
    
          <StyledFormContainer>

              <Progress
              total={questions.length} 
              currentQuestion={currentQuestion + 1}
              />
              <Icon/>

              <Question/>
              {renderError()}

              <Answers/>

            <ProgressBar progressDegree={progressDegree} />

            <ButtonNext onClick={next}>{children}</ButtonNext>
            
          </StyledFormContainer>
        </ThemeProvider>
  
      </QuizContext.Provider>
  
    );
    
  }


  
}

export default Quiz;
