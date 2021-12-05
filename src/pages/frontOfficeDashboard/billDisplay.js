import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Bill from "./bill";

//destructuring react to get only useState
function BillDisplay() {

    const [inputs, setInputs] = useState([])

    useEffect(() => {
        console.log('the use effect hook has been executed');
        axios.get('http://localhost:4000/bills')
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
            })
    }, [])

    return (<>
        <div className="billCards">
            
                {inputs.map(bill =>
                    <div key={bill.billId} >
                        <Bill details={bill} />
                    </div>
                )}

            
            <hr />
        </div>
    </>);
}
export default BillDisplay;