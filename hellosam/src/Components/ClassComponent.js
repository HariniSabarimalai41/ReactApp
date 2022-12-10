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
class ClassComponent extends React.Component{
    render()
    {
        return(
            <>
            <ul>
                <li>BTS</li>
                <li>BLACKPINK</li>
                <li>TXT</li>
                <li>ITZY</li>
            </ul>
            <Hello />
            </>
        )
    }
}
export default ClassComponent