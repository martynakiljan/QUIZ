import {ADD_ANSWER, SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_ERROR, SET_SHOW_RESULTS, RESET_QUIZ} from './ReducersType'


 function quizReducer(state, action) {
    switch(action.type) {


      case SET_CURRENT_ANSWER:
        return {
          ...state,
          currentAnswer: action.currentAnswer
        }

 
       case SET_CURRENT_QUESTION:
          return {
            ...state,
            currentQuestion: action.currentQuestion,
            progressDegree: action.progressDegree
          }  


      case SET_ERROR:
        return {
          ...state,
         error: action.error
        }


      case ADD_ANSWER:
        return {
          ...state,
         answers: action.answers
        }

  
      case SET_SHOW_RESULTS:
        return {
          ...state,
        showResults: action.showResults
        }
      
        
        case RESET_QUIZ:
          return {
            ...state,
            answers: [],
            currentQuestion: 0,
            currentAnswer: '',
            showResults: false,
            error: '',
            progressDegree: 0,

          }
        default:
          return state;
    }

  }

  export default quizReducer;