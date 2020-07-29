import React,{useState} from 'react';
import {connect} from 'react-redux'
import './SignIn.style.scss'

import InputField from '../../componnent/input-field/InputField';
import MyButton from '../../componnent/My-button/MyButton'
import{setUserLog} from '../../Redux/userReduser/user.actions'

const SignIn=({setUserLog})=>{
    const [UserDetail,setUserDetail]=useState({ 
        email:'',
        password:'',
        })
        const{email,password}=UserDetail
    
        const handdleChange=(e)=>{
            const{name,value}=e.target;
            setUserDetail({...UserDetail,[name]:value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:3005/login', {
              method: 'POST',
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            })
              .then((response) => response.json())
              .then(({ token }) =>  localStorage.setItem('token', token))
              .then(() => setUserLog())
          }
     

    return(
        <div className='signIn-continer'>
            <h3 className='signIn-title'> כניסה למערכת אקסטרא</h3>
        <form onSubmit={handleSubmit}>
            <InputField
            name="email"
            type="email"
            label=" דואל"
            value={email}
            handleChange={handdleChange}
            required/>
              <InputField
            name="password"
            type="password"
            label="סיסמה"
            value={password}
            handleChange={handdleChange}
            required/>
            <div className='sign-in-buttons'>
            <MyButton type='button' forgot >?שכחת סיסמה</MyButton>
            <MyButton type='submit'>כניסה</MyButton>
            </div>

          
        </form>
        </div>
    )  
    }

  const mapDispatchToProps=dispatch=>({
    setUserLog:()=>dispatch(setUserLog())
  })  

export default connect(null,mapDispatchToProps) (SignIn);