import { useState } from "react";

export default function Counter (){
    let [counter,setCOunter]=  useState(0)
    return(
        <div>
            <button onClick={
                () => {
                    setCOunter(counter + 3);
                    console.log(counter);
                    }
                    }> Increment + 3
            </button>
            <h1>Counter : {counter}</h1>
        </div>
    )
}