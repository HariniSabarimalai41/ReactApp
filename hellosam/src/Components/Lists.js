import React from "react"

export default function List()
{
    const BirthdayBoys=[{id:1,value:"Deepak"},{id:2,value:"Hariharan"}]
    const display=BirthdayBoys.map((boys)=>{return <li>{boys}</li>})

    return(
        <div>
            <ol>{display.value}</ol>
        </div>
    )
}
