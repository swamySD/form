import React,{ useState} from 'react'
import FormInput from './FormInput'
import './LoginForm.css'
const LoginForm = () => {
 const [values,setValues]=useState({
  username:'',
  email:'',
  birthday:'',
password:'',
confirmPassword:''
 })
 
const inputs=[
  {
    id:1,
    name:"username",
    type:'text',
    placeholder:'username',
    errorMessage:"Username should be 3-16 characters and shouldn't include special charcters!",
    label:'Username',
    pattern: "^[A-za-z0-9]{3,16}$",
    required:true,
  },
  {
    id:2,
    name:"email",
    type:'email',
    placeholder:'Email',
    errorMessage:"It should be valid email",
    label:'Email',
    required:true
  },
  {
    id:3,
    name:"birthday",
    type:'date',
    placeholder:'Birthday',
    errorMessage:"",
    label:'Birthday'
  },{
    id:4,
    name:"password",
    type:'password',
    placeholder:'Password',
    errorMessage:'password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
    label:'Password',
    pattern:`^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$`,
    required:true
  },
  {
    id:5,
    name:"confirmPassword",
    type:'password',
    placeholder:'confirm Password',
    errorMessage:"Password did not match",
    label:'Confirm Password',
    pattern:values.password,
    required:true
  }
]

 const handleSubmit=(e)=>{
  e.preventDefault()
 }

 const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
 }
console.log(values)
 return (
  <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <h1 className='title'>Registration Form</h1>
      {inputs.map((input)=>(
         <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
        <button className='submit-button'>Submit</button>
      </form>
  </div>
    )
}

export default LoginForm