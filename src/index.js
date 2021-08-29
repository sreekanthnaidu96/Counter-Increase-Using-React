import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter"



function OnScreenRender(){
    return (<div>
        <Counter increaseby={5}/>
        <Counter increaseby={10}/>
        <Counter increaseby={20}/>
    </div>)
}

ReactDOM.render(<OnScreenRender/>,document.getElementById("root"));