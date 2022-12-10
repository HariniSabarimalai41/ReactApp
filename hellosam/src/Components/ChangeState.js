import React, {Component} from "react"

export default class ChangeState extends Component{
    state={  name:"" }

    change=(e)=>{this.setState({name:e.target.value})}
    render()
    {
        return(
            <div>
                <h1>{this.state.name} age is{this.state.age}</h1>
                <input type="text" onChange={this.change}/>
                <h1>{this.state.name}</h1>

            </div>
        )
    }
}
