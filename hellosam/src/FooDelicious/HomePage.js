import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './HomePage.css';

class HomePage extends Component {
  render() {
    const myStyle={
      height: '140vh',
      marginTop: '-10px' ,
      fontsize: '5px',
      backgroundsize: 'cover',
      backgroundrepeat: 'no-repeat',
    };

    return(
      <div style={myStyle}>
      <center>
      <form>
      <div class="container">
      <font size="7">
      <font color="red">
      <h1>HOMEPAGE</h1></font></font></div>
      </form>
      </center>
      </div>

    );
  }
}
export default HomePage;