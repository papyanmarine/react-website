
import useInput from '../../hooks/useInputReducer';
import "./Modal.css";
const isInputEmpty =(val) =>val.trim() !=='';
const ModalReducer =()=>{

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[A-Za-z]+$/;
    
    /*validation for input name*/
    const {
        value: inputName,
        hasError: isNameInvalid,
        isValid: isNameValid,
        inputChangeHandler: nameChangeHandler,
        inputFocusLostHandler: nameFocusLostHandler,
        resetInputValues: resetInputNameValues
    } = useInput(isInputEmpty);
    
    /*validation for input email*/
    const {
        value: inputEmail,
        hasError: isEmailInvalid,
        isValid: isEmailValid,
        inputChangeHandler: emailChangeHandler,
        inputFocusLostHandler: emailFocusLostHandler,
        resetInputValues: resetInputEmailValues
    } = useInput((val)=>emailPattern.test(val));

     /*validation for input tel*/
     const {
        value: inputPhone,
        hasError: isPhoneInvalid,
        isValid: isPhoneValid,
        inputChangeHandler: phoneChangeHandler,
        inputFocusLostHandler: phoneFocusLostHandler,
        resetInputValues: resetInputPhoneValues
    } = useInput(isInputEmpty);

    // const [isFormValid, setIsFormValid] = useState(false); for useeffect

    let isFormValid =false;
    
    if(isNameValid  && isEmailValid && isPhoneValid){
        isFormValid = true;
    }

    // useEffect(()=>{
    //     if(isInputNameValid  && isInputEmailValid && isInputPhoneValid){
    //         setIsFormValid(true);
    //     }else{
    //         setIsFormValid(false);
    //     }

    // }, [inputName, inputEmail, inputPhone])

    const formSubmitHandler =(e)=>{
        e.preventDefault();

        if(!isFormValid){
            return;
        }

        console.log(inputName);
        resetInputNameValues();
        resetInputEmailValues();
        resetInputPhoneValues();
        
    }


    const className = isNameInvalid ? "inp inp_name error" : "inp inp_name";
    const classEmail = isEmailInvalid ? "inp inp_email error" : "inp inp_email";
    const classPhone = isPhoneInvalid ? "inp inp_tel error" : "inp inp_tel";
    return (
        <div className="modal modal-err">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="popup-content-tltle">Lorem ispum</h2>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formSubmitHandler} className="form fl-col">
                            <div className="inp-wrap fl-col">
                                <label htmlFor="inp_name" className="form-label inp-label">Your name</label>
                                <input  id= "inp_name" type="text"
                                        className={className}
                                        onChange={nameChangeHandler}
                                        onBlur={nameFocusLostHandler}
                                        value={inputName}
                                        placeholder="Jhon"/>
                                {isNameInvalid && <p className="error-txt">Input is not valid</p>}
                            </div>
                            <div className="inp-wrap fl-col">
                                <label htmlFor="inp_email" className="form-label inp-label">Your email</label>
                                <input  id= "inp_email" type="email" 
                                        className= {classEmail}
                                        onChange={emailChangeHandler}
                                        onBlur={emailFocusLostHandler}
                                        value={inputEmail}
                                        placeholder="jhon@myemail.com"/>
                                {isEmailInvalid && <p className="error-txt">Input is not valid</p>}
                            </div>
                            <div className="inp-wrap fl-col">
                                <label htmlFor="inp_tel" className="form-label inp-label">Your Phone</label>
                                <input  id= "inp_tel" type="tel" 
                                        className= {classPhone}
                                        onChange={phoneChangeHandler}
                                        onBlur={phoneFocusLostHandler}
                                        value={inputPhone}
                                        placeholder="+37493605338"/>
                                {isPhoneInvalid && <p className="error-txt">Input is not valid</p>}
                            </div>
                            <div className="row">
                                    <button disabled={!isFormValid} type="submit" className="btn"> Send </button>
                            </div>
                        </form>
                    </div>  
                </div> 
            </div>
         </div>
        
    )
}
export default ModalReducer;