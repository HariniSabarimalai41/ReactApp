import React,{ Component } from "react";
import ReactDOM from "react-dom/client";
import "./ResetPassword.css";

class ResetPassword extends Component {
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
      <div class="container">
      <center><font color= "#003844"><font size="7">
      <font face="Kadwa"><div class="top">FORGOT PASSWORD</div></font></font></font></center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <hr></hr><br></br>
      <center><input type="text" placeholder="Enter email id or phone number" name="email id" required /></center>
      <center><input type="password" placeholder="Enter New Password" name="password" required /></center>
      <center><input type="password" placeholder="Confirm New Password" name="password" required /></center><br></br><br></br><br></br><br></br>
      <button type="submit"><font color="#C1D4D5"><font face="kadwa">RESET PASSWORD</font></font></button>
      </div>
      </form>
      </center>
      </div>

    );
  }
}
export default ResetPassword;