import React, { useState } from 'react';

function Country(props) {

    const[CountryName ,setCountryName] =useState('india');

    const changeCountry=() => {
        setCountryName ('UK')

        // console.log(changeCountry);
    }
    return (
        <div>
            <p>{CountryName}</p>
            <button onClick ={() => changeCountry()}>changeCountry</button>
        </div>
    );
}

export default Country;