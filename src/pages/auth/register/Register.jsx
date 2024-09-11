
import React, { useState } from 'react'
import Input from '../../../components/inputs/input/Input';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/inputs/checkbox/Checkbox';
import { useNavigate } from 'react-router-dom';
import { AuthFormWrapper, AuthWrapper, CallToAction, FormWrapper } from '../login/Login.style';
import { NameWrapper } from './Register.style';

export default function Register() {

const [email, setEmail] = useState('');
const [emailError, setEmailError] =useState(false);
const [password, setPassword] = useState('')
const [passwordError, setPasswordError] =useState(false);
const [isChecked, setIsChecked] = useState(false);
const [isValid, setIsValid] = useState(false);
const navigate = useNavigate();

const handleEmailChange = (e) =>{
    setEmail(e.target.value)
    setEmailError(false);
}



const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
    setPasswordError(false);
}


// Checkbox Validation: Terms and Agreement 
// State for form values

// Handler for checkbox change
const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
  setIsValid(false)
};


const handleSubmit = (e)=>{
    e.preventDefault();
    if(email === "" || null){
        setEmailError(true);
    }else if(password === "" || null){
        setPasswordError(true);
    }

    // Check if checkbox is checked
  else if(isChecked) {
    alert('checked')   
    navigate('/')
  }else if(!isChecked){
    navigate('/')
  }

}

  return (
    <AuthWrapper>
        <AuthFormWrapper onSubmit={handleSubmit}>
        <h4>Create Account</h4>
        <p>Join to unlock the best of our services</p>

        <NameWrapper>
        <Input
              title={'First Name'}
              label={'Name'}
              type={'text'}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              requiredSymbol={'*'}
              inputPadding={'15px'}
              placeholder={'johndoe@email.com'}  
          />

        <Input
              title={'Last Name'}
              label={'Last Name'}
              type={'text'}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              requiredSymbol={'*'}
              inputPadding={'15px'}
              placeholder={'johndoe@email.com'}  
          />
        </NameWrapper>

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
          
          <Input
              title={'Password'}
              label={'Password'}
              type={'password'}
              value={password}
              onChange={handlePasswordChange} 
              error={passwordError}
              requiredSymbol={'*'}
              inputPadding={'15px'}
              placeholder={'**********'}              
          />

        {/* Checkboxe */}
           <CallToAction>
                <div>
                <Checkbox
                    checkboxId={'password'}
                    isChecked={isChecked}
                    handleCheckboxChange={handleCheckboxChange}
                    checkboxMessage={'Keep me logged in on this device'}
                    isValid={isValid}
                />
                    {/* <input type="checkbox" id="password" />
                    <span>Keep me logged in on this device</span> */}
                 </div>
                    <span><a href="resetpassword.html">Forget Password</a></span>
            </CallToAction>
            
            
            
            {/* login button */}
            <div>
                <Button text={'Login'}  rightIcon={''}/>
            </div>



            <CallToAction>Not yet registered? <a href="signup.html"> Create Account here</a></CallToAction>
        </AuthFormWrapper>
    </AuthWrapper>
  )
}
