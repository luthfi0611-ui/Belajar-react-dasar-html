import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    const [Show2, setShow2] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked);
    }
    return (
        <div>
            {Show2 ? <Counter key="1" name="2"/> : <Counter key="2" name="1"/> }
            <input type="checkbox" checked={Show2} onChange={handleChange} /> tampilkan
        </div>

    )
    };