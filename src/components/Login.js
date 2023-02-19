import React from "react";
import styles from "../style/style.module.css";
import img from "../photos/Capture.JPG";
export default function Login() {
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
          <form className={styles.formfields}>
            <div className={styles.inputfields}>
              <input
                className={styles.input}
                placeholder="Email address or phone number"
              ></input>
              <input
                className={styles.inputpassword}
                placeholder="Password"
              ></input>
              <button className={styles.loginbtn}>Log in</button>
              <a href="/" className={styles.forgetpassword}>
                Forgotten password?
              </a>
              <hr className={styles.hrtag} />
            </div>
            <div>
              <button className={styles.createnewbtn}>
                Create new account
              </button>
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
