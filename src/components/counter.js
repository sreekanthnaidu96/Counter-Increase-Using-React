import React,{useState} from 'react'

const Counter = (props) => {

    const [DefaultValue,StateHook]=useState(0)
    function ClickHandeler(){
        StateHook(DefaultValue + props.increaseby)
    }
    return (
        <div>
            <button onClick={ClickHandeler}>increase + {props.increaseby}</button>
            <p>{DefaultValue}</p>            
        </div>
    )
}

export default Counter
