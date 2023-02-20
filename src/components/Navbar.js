import React from "react";
import styles from "../style/style.module.css";
import img from "../photos/Capture.JPG";
import micon from '../photos/1.JPG'
import nicon from '../photos/2.JPG'
import picon from '../photos/3.JPG'


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.navbarimg} src={img} />
      </div>
      <div>
        <input className={styles.searchbar} placeholder='Search Facebook'>
        </input>
      </div>
      <div className={styles.profilebox}>
            <div className={styles.profileandnotification}>
                <img className={styles.icon} src={micon} />
            </div>
            <div className={styles.profileandnotification}>
            <img className={styles.icon} src={nicon} />
            </div>
            <div className={styles.profileandnotification}>
            <img className={styles.icon} src={picon} />
            </div>
      </div>
    </div>
  );
}
