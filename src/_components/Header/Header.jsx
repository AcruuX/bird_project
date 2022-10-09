import React from "react";
import styles from "./styles.module.css"
import logo from "../../_assets/logo.png"
import notify from "../../_assets/Notify.png"

const Header=(props)=>{
    return (
        <div className="col-12 d-flex align-items-center">
            <div className="col-1">
            <img src={logo} alt="" width={"130%"}/>
            </div>
            <div className={`col-11 d-flex align-items-center justify-content-between ${styles["header-right"]}`}>
                <h3>Ramaera industries</h3>
                <div className="d-flex align-items-center"><img src={notify} alt="" />English (UK) <div className={`${styles['traingle']}`}></div></div>
            </div>
        </div>
    )
}
export default Header