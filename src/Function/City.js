import React, { useState } from 'react';

function City(props) {

    const[cityName,setcityName] = useState('surat');

    const changeCity =() => {
         setcityName ('Baroda')

        // console.log(changCity);
    }
    return (
        <div>
            {
                    props.Country_name === 'india' ? <p>Taj mahal</p> : <p>London Eye</p>
            }
            <p>{cityName}</p>
            <button onClick ={() => changeCity()}>changeity</button>
        </div>
    );
}

export default City;