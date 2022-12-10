import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor()
    {
        super()
        this.state={
            name:"Sachin",
            age:25
        }
    }
    render()
    {
        return(
            <>
            <h1> {this.state.name} age is {this.state.age}</h1>
            </>
        )
    }
}