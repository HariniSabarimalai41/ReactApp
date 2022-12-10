import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./OrderPlaced.css";

class OrderPlaced extends Component {
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
      <img src='image 34.png' className='pic'></img>
      <div class="top">
      <font color= "black"><font size="10">
      <font face="Rockwell Extra Bold">Your Order Is Completed ! <br></br></font></font></font>
      <div class="top2">
      <font color="635E5E"><font size="5">
      <font face="Eras Demi ITC">You will be receiving a confirmation email with order details. </font> 
      </font></font></div></div>
      <div class="container2">
      <font color="black"><font size="8">
      <font face="Rockwell Extra Bold">Shop More >></font>
      </font></font>
      </div>
      </div>
      <img src='Crocs-logo-design-on-transparent-background-PNG-removebg-preview 5.png' className='logo'></img>
  

      </form>
      </center>
      </div>
      
    )
  }
}
export default OrderPlaced;