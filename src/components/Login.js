import React from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import styles from "../style/style.module.css";
import img from "../photos/Capture.JPG";
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../firebas.js'

export default function Login() {
  const navigator = useNavigate()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleUserNameChange =(event) =>{
    setUserName(event.target.value)
  };

  const handlePasswordChange =(event) =>{
    setPassword(event.target.value)
  }

  const handleLoginSubmission =(event) => {
    event.preventDefault();
    if(username !== ''){
    
        signInWithEmailAndPassword(auth, username, password).then((res) =>{
          console.log('res', res);
          navigator('/mainpage')
    
        }).catch((err) => alert('This is not a valid account, Please Sign Up First', err))      
  }else{
    alert('User Name or Password Invalid...')
  }
  
  
  }  
  return (
    <>
      <div className={styles.imagetext}>
        <div className={styles.main}>
          <div>
            <img alt="Facebook Icon" className={styles.fbicon} src={img} />
          </div>
          <div>
            <h2 className={styles.logotext}>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
        </div>

        <div className={styles.loginform}>
          <form className={styles.formfields}>
            <div className={styles.inputfields}>
              <input
                className={styles.input}
                placeholder="Email address or phone number"
                value ={username}
                onChange ={handleUserNameChange}
              ></input>
              <input
                className={styles.inputpassword}
                placeholder="Password"
                type='password'
                value={password}
                onChange ={handlePasswordChange}
              ></input>
              <button 
                    onClick={handleLoginSubmission}
                    className={styles.loginbtn}>Log in</button>
              <a href="/" className={styles.forgetpassword}>
                Forgotten password?
              </a>
              <hr className={styles.hrtag} />
            </div>
            <div>
              <Link to='/signup'> <button className={styles.createnewbtn}>
                Create new account
              </button></Link>
            </div>
          </form>
          <div className={styles.createpage}>
            <a href="/pages/create/?ref_type=registration_form" class="_8esh">
              Create a Page
            </a>
            &nbsp; for a celebrity, brand or business.
          </div>
        </div>
        <div id="test">
            
        </div>
      </div>
    </>
  );
}
