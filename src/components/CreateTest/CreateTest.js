import './CreateTest.css'
import {useDispatch} from "react-redux";
import {createNewTestAC} from "../../redux/Quizz-reducer";
import {useState} from "react";


const CreateTest = () => {
    const dispatch = useDispatch()

    const [valueBool,setValueBool] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createNewTestAC(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value,valueBool))
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
            e.target[3].value = ''
            e.target[4].value = ''
            console.log(valueBool)
    }


    const onChangeBool = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.checked)
        setValueBool(e.target.value)
    }

    return (
        <div className="createTest">
            <div className="createContent">
                <h1>Создать тест</h1>
                <form className="createContainer" onSubmit={submitHandler}>
                    <div className="block">
                        <div className="name">Вопрос:</div>
                        <input placeholder='Вопрос' type="text" className="inputClass quest"/>
                    </div>
                    <div className="block">
                        <div className="name">Ответ 1:</div>
                        <input placeholder='Вопрос 1' type="text" className="inputClass"/>
                        {/*<input type="radio" name="result" value='one' onChange={onChangeBool}/>*/}
                    </div>
                    <div className="block">
                        <div className="name">Ответ 2:</div>
                        <input placeholder='Вопрос 2' type="text" className="inputClass"/>
                        {/*<input type="radio" name="result" value='two' onChange={onChangeBool}/>*/}
                    </div>
                    <div className="block">
                        <div className="name">Ответ 3:</div>
                        <input placeholder='Вопрос 3' type="text" className="inputClass"/>
                        {/*<input type="radio" name="result" value='three' onChange={onChangeBool}/>*/}
                    </div>
                    <div className="block">
                        <div className="name">Ответ 4:</div>
                        <input placeholder='Вопрос 3' type="text" className="inputClass"/>
                        {/*<input type="radio" name="result" value='four' onChange={onChangeBool}/>*/}
                    </div>

                    <button className="addBtn">Добавить тест</button>
                </form>
                <h1>Выберите правильный ответ?</h1>
                <div className="res">
                    <div className='trueRes'>1 -  <input type="radio" name="result" value='one' onChange={onChangeBool}/></div>
                    <div className='trueRes'>2 -  <input type="radio" name="result" value='two' onChange={onChangeBool}/></div>
                    <div className='trueRes'>3 -  <input type="radio" name="result" value='three' onChange={onChangeBool}/></div>
                    <div className='trueRes'>4 -  <input type="radio" name="result" value='four' onChange={onChangeBool}/></div>
                </div>
            </div>
        </div>
    )
}

export default CreateTest