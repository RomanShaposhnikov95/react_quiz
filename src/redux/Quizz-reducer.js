import v1 from "uuid";

const NEXT_CURRENT_STEP = 'NEXT_CURRENT_STEP';
const GET_ANSWER = 'GET_ANSWER';
const TEST_ANSWER = 'TEST_ANSWER';
const NEW_TEST = 'NEW_TEST';
const CREATE_NEW_TEST = 'CREATE_NEW_TEST';


const initialState = {
    quizz: [
        {id: v1(), question: '2 + 2 =', results: [
                {id: 1, result: 22, value: false},
                {id: 2, result: 5, value: false},
                {id: 3, result: 4, value: true},
                {id: 4, result: 3, value: false}
            ]},
        {id: v1(), question: '5 + 5 =', results: [
                {id: 5, result: 10, value: true},
                {id: 6, result: 5, value: false},
                {id: 7, result: 25, value: false},
                {id: 8, result: 55, value: false}
            ]},
        {id: v1(), question: '10 - 5 =', results: [
                {id: 9, result: 15, value: false},
                {id: 10, result: 5, value: true},
                {id: 11, result: 50, value: false},
                {id: 12, result: 55, value: false}
            ]},
    ],
    currentStep: 0,
    answer: [],
    finish: false,
    score: 0,
}


export const QuizzReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_CURRENT_STEP:
            if(state.currentStep === (state.quizz.length - 1)) {
                return {...state, currentStep: state.quizz.length - 1, finish: true}
            } else {
                return {...state, currentStep: state.currentStep + 1}
            }
        case GET_ANSWER:
            return {...state, answer: [...state.answer, action.answer]}
        case TEST_ANSWER:
            const result = state.answer.find(el => el.id === action.id)
            if (result.value === true) {
                    return {...state, score: state.score + 1}
            }
            return state
        case NEW_TEST:
            return {...state,  currentStep: 0, answer: [], finish: false, score: 0}
        case CREATE_NEW_TEST:
            const newTest =  {id: v1(), question: action.question, results: [
                    {id: v1(), result: action.answer1, value: action.bool === "one" ? true : false},
                    {id: v1(), result: action.answer2, value: action.bool === "two" ? true : false},
                    {id: v1(), result: action.answer3, value: action.bool === "three" ? true : false},
                    {id: v1(), result: action.answer4, value: action.bool === "four" ? true : false}
                ]}
            return {...state, quizz: [...state.quizz, newTest]}
        default:
            return state
    }
}

export const nextCurrentAC = () => {
    return {
        type: NEXT_CURRENT_STEP
    }
}

export const getAnswerAC = (answer) => {
    return {
        type: GET_ANSWER,
        answer
    }
}

export const TestAnswerAC = (id) => {
    return {
        type: TEST_ANSWER,
        id
    }
}

export const newTestAC = () => {
    return {
        type: NEW_TEST
    }
}

export const createNewTestAC = (question,answer1,answer2,answer3,answer4,bool) => {
    return {
        type: CREATE_NEW_TEST,
        question,answer1,answer2,answer3,answer4,bool
    }
}
