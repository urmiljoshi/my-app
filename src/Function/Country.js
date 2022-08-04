import React, { useState } from 'react';
import City from './City';

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
            <City Country_name ={CountryName} />

        </div>
    );
}

export default Country;