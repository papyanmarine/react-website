import {useReducer} from 'react';

const initialInputState ={
    inputValue: "",
    inputFocus: false
}
const inputStateReducer = (state, action)=>{
    if(action.type === "INPUT_CHANGE"){
        return{
            inputValue: action.value,
            inputFocus: state.inputFocus
        }
    }
    if(action.type === "INPUT_BLUR"){
        return{
            inputValue: state.inputValue,
            inputFocus: true
        }
    }
    if(action.type === "RESET_VALUES"){
        return{
            inputValue: "",
            inputFocus: false
        }
    }
    return initialInputState
}

const useInput =(validateValueFunc) =>{

    const [inputState, dispatchAction] = useReducer(inputStateReducer, initialInputState);

    const isInputValueValid = validateValueFunc(inputState.inputValue); // proverka validnosti est li xot odin nevalidni simvol
    const isValueInvalid = !isInputValueValid && inputState.inputFocus;

    const inputChangeHandler = (event) =>{
        dispatchAction({type: "INPUT_CHANGE", value: event.target.value})
    };

    const inputFocusLostHandler =() =>{
        dispatchAction({type: "INPUT_BLUR"})
    };

    const resetInputValues =()=>{
        dispatchAction({type: "RESET_VALUES"})
    }

    return{
        value: inputState.inputValue,
        hasError: isValueInvalid,
        isValid: isInputValueValid,
        inputChangeHandler,
        inputFocusLostHandler,
        resetInputValues
    }
}
export default useInput;