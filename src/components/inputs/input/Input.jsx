


import { InputError, InputLabel, InputStyle, InputWrapper } from './Input.style'

export default function Input({title, value, error, onChange, requiredSymbol, InputWidth, type, maxLength, label, inputPadding, placeholder}) {

  return (
                <InputWrapper InputWidth={InputWidth}>
                    <InputLabel htmlFor="name">{label}{requiredSymbol}</InputLabel>
                    <InputStyle
                    inputPadding={inputPadding} 
                        type={type} 
                        placeholder={placeholder} 
                        value={value}
                        onChange={onChange}
                        maxLength={maxLength}
                    />
                    {error? <InputError>{title} is required</InputError> : '' }
            </InputWrapper>
        )
    }




    
    