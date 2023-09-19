import {useState} from 'react';

const useInput =(validateValueFunc) =>{

    const [inputValue, setInputValue] = useState('');
    const [isFocusValue, setIsFocusValue] = useState(false);

    const isInputValueValid = validateValueFunc(inputValue); // proverka validnosti est li xot odin nevalidni simvol
    const isValueInvalid = !isInputValueValid && isFocusValue;

    const inputChangeHandler = (event) =>{
        setInputValue(event.target.value);
    };

    const inputFocusLostHandler =() =>{
        setIsFocusValue(true);
    };

    const resetInputValues =()=>{
        setInputValue('');
        setIsFocusValue(false);
    }

    return{
        value: inputValue,
        hasError: isValueInvalid,
        isValid: isInputValueValid,
        inputChangeHandler,
        inputFocusLostHandler,
        resetInputValues
    }
}
export default useInput;