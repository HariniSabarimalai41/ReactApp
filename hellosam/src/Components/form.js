import React from "react";
import ReactDOM from "react-dom/client";

class Hello extends React.Component
{
    render()
    {
        return(
            <h1>I Am At Hello Class Component</h1>
        )
    }

}
class File extends React.Component
{
    render()
    {
        return(
            <div>
                <div>Username: <input type="text"/></div>

                <div>Password: <input type="password"/></div>
            </div>
        )
    }
    
}
export default File