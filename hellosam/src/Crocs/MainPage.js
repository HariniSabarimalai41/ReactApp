import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./MainPage.css";

class MainPage extends Component {
  render() {
    const myStyle={
      height: "100vh",
      marginTop: "-70px" ,
      fontSize: "5px" ,
      backgroundSize: "cover" ,
      backgroundRepeat: "no-repeat",
    };
    return(
        <div style={myStyle}>
        <div class="container"></div>
        <div class="top">
        <font color= "black"><font size="25">
        <font face="Rockwell Extra Bold">END  OF  SEASON  SALE<br></br></font></font></font>
        <div class="container2"></div>
        </div> 
        
        </div>

    )
  }
}
export default MainPage;