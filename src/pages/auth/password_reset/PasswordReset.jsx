
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { AuthFormWrapper, AuthWrapper, CallToAction } from '../login/Login.style';
import Input from '../../../components/inputs/input/Input';
import Button from '../../../components/button/Button';

export default function PasswordReset() {

const [email, setEmail] = useState('');
const [emailError, setEmailError] =useState(false);

const navigate = useNavigate();

const handleEmailChange = (e) =>{
    setEmail(e.target.value)
    setEmailError(false);
}




// Checkbox Validation: Terms and Agreement 
// State for form values




const handleSubmit = (e)=>{
    e.preventDefault();
    if(email === "" || null){
        setEmailError(true);
    }else{
      navigate('/login')
    }
    // Check if checkbox is checked


}

  return (
    <AuthWrapper>
        <AuthFormWrapper onSubmit={handleSubmit}>
        <h4>Sign In</h4>
        <p>Please Enter your email to reset your password</p>
            <Input
              title={'Email'}
              label={'Email'}
              type={'email'}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              requiredSymbol={'*'}
              inputPadding={'15px'}
              placeholder={'johndoe@email.com'}  
          />
                      
            {/* reset button */}
            <div>
                <Button text={'Reset Password'}  rightIcon={''}/>
            </div>

        </AuthFormWrapper>
    </AuthWrapper>
  )
}
