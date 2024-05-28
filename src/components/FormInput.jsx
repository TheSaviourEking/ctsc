import { useState } from 'react';
import './FormInput.css';

const FormInput = (props) => {
    // console.log('PROPS', props)
    const { userDetail, errorMessage, onChange, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(() => true)
    }

    return (
        <div className="mb-4">

            <input
                {...inputProps}
                className="form-control input-style"
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'email' && setFocused(() => true)}
                focused={focused.toString()}
            />
            <div>
                <span>* {errorMessage}</span>
            </div>
        </div>
    );
}

export default FormInput;
/**{
  "id": "email",
  "name": "email",
  "placeholder": "Enter your email address",
  "type": "email",
  "setUserDetails": true,
  "userDetail": ""
} */
