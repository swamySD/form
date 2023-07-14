import React, { useState } from 'react'
import './FormInput.css'


const FormInput = ({label,errorMessage,onChange,id,...inputProps}) => {
  const [focused,setFocused]=useState(false)

  const handleFocus=(e)=>{
    setFocused(true)
  }
  return (
    <div className='form-input'>
        <label>{label}</label>
    <input className='input' {...inputProps} 
    onChange={onChange} required onBlur={handleFocus}
    onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
    focused={focused.toString()}
    />
    <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput