import React, { useState } from 'react'
import styles from "../style/style.module.css";
import img from "../photos/Capture.JPG";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebas.js'
import {Link, useNavigate} from 'react-router-dom'


export default function Signup() {
  const navigator = useNavigate();
  const [username, setUserName] = useState('')
  const [Password, setPassword] = useState('')

  // handler for submision of sign up form
  const handleSubmission = (event) =>{
    event.preventDefault();
    
    if(username!==''){
      createUserWithEmailAndPassword(auth, username, Password).then((res) =>{
        alert('User has been created')
        console.log('the user is'+ username + ' '+  Password)
        navigator('/login')
        
  
      }).catch((err) => console.log('error', err)) 
  
    }else{
      alert('User or Password is invalid..')
    }
    
  };

  const handleUserNameChange =(event) =>{
    setUserName(event.target.value)
  };

  const handlePasswordChange =(event) =>{
    setPassword(event.target.value)
  }


  return (
    <>
      <div className={styles.imagetext}>
        <div className={styles.main}>
          <div>
            <img className={styles.fbicon} src={img} />
          </div>
          <div>
            <h2 className={styles.logotext}>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
        </div>

        <div className={styles.loginform}>
          <form onSubmit={handleSubmission} className={styles.formfields}>
            <div className={styles.inputfields}>
              <input
                onChange={handleUserNameChange}
                value ={username}
                className={styles.input}
                placeholder="Email address or phone number"
              ></input>
              <input
                onChange={handlePasswordChange}
                className={styles.inputpassword}
                placeholder="Password"
                type='password'
              ></input>
              {/* form button for sign up  */}
              <Link to='/login'> <button 
              onClick={handleSubmission}
              className={styles.loginbtn}>Sign up</button></Link>
              <hr className={styles.hrtag} />
            </div>
            <Link className={styles.forgetpassword} to='/login'>Already have account</Link>
          </form>
          <div className={styles.createpage}>
            <a href="/pages/create/?ref_type=registration_form" className="_8esh">
              Create a Page
            </a>
            &nbsp; for a celebrity, brand or business.
          </div>
        </div>
        <div id="test">
            
        </div>
      </div>
    </>
  )
}
