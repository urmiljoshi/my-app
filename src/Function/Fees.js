import React, { useState } from 'react';

function Fees(props) {

    const [Fees, setFees] = useState('45000');


    return (
        <div>
            {
                 props.Course_name === 'React' ? <p>45000</p> : <p>50000</p>
            }
             {/* <p>{Fees}</p> */}
        </div>
    );
}

export default Fees;