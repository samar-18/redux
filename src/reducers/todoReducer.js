import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/types"

const initState = [
   
    {
        id:1,
        desc:'Learn React Props ',
        isDone:false
    },
    {
        id:2,
        desc:'Learn React State',
        isDone:true
    },
    {
        id:3,
        desc:'Learn React Hooks',
        isDone:true
    },
    {
        id:4,
        desc:'Learn React Router',
        isDone:false
    },
    {
        id:5,
        desc:'Learn Redux',
        isDone:true
    }
]
    const todoReducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return [...state,action.payload]
            case DELETE_TASK:
                return state.filter(el=>el.id!==action.payload)   
            case TOGGLE_TASK:
                return state.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)
    case EDIT_TASK:
        return state.map(el=>el.id===action.payload.id? action.payload:el)
        default:
            return state
    }
}

export default todoReducer