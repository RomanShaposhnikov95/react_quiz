import './Quizz.css'
import {useDispatch} from "react-redux";
import {getAnswerAC, nextCurrentAC, TestAnswerAC} from "../../redux/Quizz-reducer";


const Results = (props) => {
    const {id,result} = props
    const dispatch = useDispatch()

    const nextStepHandler = () => {
        dispatch(nextCurrentAC())
        dispatch(getAnswerAC(props))
        dispatch(TestAnswerAC(id))
    }

    return (
        <div onClick={nextStepHandler} className="result">{result}</div>
    )
}

export default Results