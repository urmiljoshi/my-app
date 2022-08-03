import React, { useState } from 'react';

function City(props) {

    const[cityName,setcityName] = useState('surat');

    const changeCity =() => {
         setcityName ('Baroda')

        // console.log(changCity);
    }
    return (
        <div>
            <p>{cityName}</p>
            <button onClick ={() => changeCity()}>changeity</button>
        </div>
    );
}

export default City;