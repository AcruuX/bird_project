import React from "react";
import Header from "../../_components/Header/Header";
import styles from "./styles.module.css"
import verified from "../../_assets/verified.png"

class Verify extends React.Component{
    constructor(props){
        super(props);
        this.state = { otp1: "", otp2: "", otp3: "", otp4: "", submit:0,error:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(value1, event) {
        if(isNaN(event.target.value) || event.target.value===" "){
          event.target.value=""
        }else{
        this.setState({ [value1]: event.target.value });
      }}
    
      handleSubmit(button,event) {
        event.preventDefault();
        let error = 0
        if(button!=="next"){
        if(this.state.otp1===""||this.state.otp2===""||this.state.otp3===""||this.state.otp4===""){
          
          this.setState({error:"Please enter 4 digit OTP to be verified and proceed"},()=>{
            error=1;
          })
        }else if(this.state.otp1!=="1"||this.state.otp2!=="2"||this.state.otp3!=="3"||this.state.otp4!=="4"){
          
          this.setState({error:"Please enter valid OTP"},()=>{
            error=1;
          })
        }
        else{
          this.setState((e)=>({submit:!e.submit,error:"",otp1:"",otp2:"",otp3:"",otp4:""}))
        }
      }
        if(error===1||button==="next")this.setState((e)=>({submit:!e.submit,error:""}))
      }
    
      inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
          if(isNaN(elmnt.target.value) || elmnt.target.value!==""){
            const next = elmnt.target.tabIndex;
            if (next < 4) {
              elmnt.target.form.elements[next].focus()
            }
          }
        }
    
      }
    render(){
        return(
            <div className={`${styles['body-bg']}`}>
                <Header/>
                <div className={`col-12 fs-20 d-flex flex-column align-items-center justify-content-center ${styles['content-body']}`}>
                  {!this.state.submit
                    ?<p className="">We will send you one time password this email address. <div className={`${styles['message-bb']}`}></div></p>
                    :<p className="">Your Email Verification has been successful. Please click on next to proceed.<div className={`${styles['message-bb']}`}></div></p>
                  }
                    {!this.state.submit?<div>
                        <p>(example123@gmail.com)</p>
                        <form action="">
                        <div className={`${styles['otp-main']} d-flex justify-content-center`}>
                            <input type="text" name="otp1" maxLength="1" required autoComplete="off" tabIndex="1" onChange={e => this.handleChange("otp1", e)} onKeyUp={e => this.inputfocus(e)}/>
                            <input type="text" name="otp2" maxLength="1" required autoComplete="off" className="otpInput" tabIndex="2" onChange={e => this.handleChange("otp2", e)}  onKeyUp={e => this.inputfocus(e)}/>
                            <input type="text" name="otp3" maxLength="1" required autoComplete="off" className="otpInput" tabIndex="3" onChange={e => this.handleChange("otp3", e)} onKeyUp={e => this.inputfocus(e)}/>
                            <input type="text" name="otp4" maxLength="1" required autoComplete="off" className="otpInput" tabIndex="4" onChange={e => this.handleChange("otp4", e)} onKeyUp={e => this.inputfocus(e)}/>
                        </div>
                        {this.state.error!==""?<p className={`${styles['error']}`}>{this.state.error}</p>:""}
                        <button type="submit" className="col-6" onClick={(e)=>this.handleSubmit("done",e)}>Done</button>
                        </form>
                    </div>:<div className="" style={{marginLeft:"-5%"}}>
                      <img src={verified} alt="" />
                      <button type="submit" className={`col-6 ${styles['submit']}`} onClick={(e)=>this.handleSubmit("next",e)}>Next</button>
                      </div>}
                </div>
            </div> 
        )
    }
}
export default Verify