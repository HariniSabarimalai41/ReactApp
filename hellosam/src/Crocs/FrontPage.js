import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./FrontPage.css";

class FrontPage extends Component {
  render() {
    const myStyle={
      height: "110vh",
      marginTop: "-70px" ,
      fontSize: "5px" ,
      backgroundSize: "cover" ,
      backgroundRepeat: "no-repeat",
    };
    return(
      <div style={myStyle}></div>
    )
  }
}
export default FrontPage;