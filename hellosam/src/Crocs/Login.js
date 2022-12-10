import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./Login.css";

class Login extends Component {
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
      <center><font color= "#000000"><font size="7">
      <font face="Eras Bold ITC"><div class="top">LOGIN</div></font></font></font></center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br>
      <center><input type="text" placeholder="Enter Username" name="username" required /></center>
      <center><input type="password" placeholder="Enter Password" name="password" required /></center>
      <font face="Cambria Math"><div class="bottom">FORGOT PASSWORD?</div></font>
      <font face="Cambria"><div class="bottom2">Don’t have account ? </div></font>
      <font face="Cambria"><font color="#FFFFFF"><div class="bottom3">create a new account</div></font></font>
      <button type="submit"><font color="#000000"><font face="kadwa">LOG IN</font></font></button>
      <img src='Crocs-logo-design-on-transparent-background-PNG-removebg-preview 5.png' className='logo'></img>

      </div>
    )
  }
}
export default Login;