import React,{ Component } from "react";
import ReactDOM from "react-dom/client";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  render() {
    const myStyle={
      height: "110vh",
      marginTop: "-70px" ,
      fontSize: "5px" ,
      backgroundSize: "cover" ,
      backgroundRepeat: "no-repeat",
    };
    return(
      <div style={myStyle}>
      <center>
      <form>
      <div class="container"></div>
      <center><div class="top"><font color= "000000"><font size="7">
      <font face="Eras Bold ITC">FORGOT PASSWORD</font></font></font><div class="bottom">
      <button type="submit"><font color="#000000"><font face="Khula">RESET PASSWORD</font></font></button></div></div></center>
      <center><input type="text" placeholder="Enter email id or phone number" name="email id" required /></center>
      <center><input type="password" placeholder="Enter New Password" name="password" required /></center>
      <center><input type="password" placeholder="Confirm New Password" name="password" required /></center><br></br><br></br><br></br><br></br>
      <img src='Crocs-logo-design-on-transparent-background-PNG-removebg-preview 5.png' className='logo'></img>
      </form>
      </center>
      </div>

    )
  }
}
export default ForgotPassword;