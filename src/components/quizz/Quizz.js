import './Quizz.css'
import {useDispatch, useSelector} from "react-redux";
import {newTestAC} from "../../redux/Quizz-reducer";
import Results from "./Results";


const Quizz = () => {
    const {quizz,currentStep,finish,score} = useSelector(state => state.QuizzReducer)
    const dispatch = useDispatch()

    const newTestHandler = () => {
        dispatch(newTestAC())
    }

    return (
        <div className="wrapper">
            {
                finish ?
                <div className='finish'>
                        <h1>Конец теста</h1>
                        <div className="score">Правельных ответов: {score} из {quizz.length}</div>
                        <div className="newTest">Пройти тест еще раз: <button onClick={newTestHandler} className="btn">New test</button></div>
                </div>
                    :
                <div className='quizz'>
                    <h1 className='question'>{quizz[currentStep].question}</h1>
                    <div className='results'>
                        {
                            quizz[currentStep].results.map(el =>
                                <Results key={el.id} {...el}/>
                            )
                        }
                    </div>
                    <span className='activeSpan'>{currentStep + 1}/{quizz.length}</span>
                </div>
            }
        </div>
    )
}
export default Quizz;