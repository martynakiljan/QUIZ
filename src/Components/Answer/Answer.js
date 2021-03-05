import React  from 'react';
import AnswerContainer from './AnswerContainer';
import '../../App.css'
import { SET_CURRENT_ANSWER, SET_ERROR} from '../../Reducers/ReducersType'



function Answer({letter, answer, selected, ...props})  {


    const handleClick = e => {

        props.dispatch({
            type: SET_CURRENT_ANSWER, 
            currentAnswer: e.target.value
        })
            props.dispatch({
            type: SET_ERROR , error: ''
         })
    }

    let classes = ['answer']

    if(selected) {
        classes.push('selected')
    }

    return (
        
        <AnswerContainer 
        value = {letter}
        className={classes.join(' ')}
        onClick={handleClick} >  
        <span className="letter">{letter}. </span>{answer}

        </AnswerContainer>
       
    )
}

export default Answer