import React, { useEffect, useState } from 'react';

function TimeFun(props) {
    const [Time , setTime] = useState (new Date());
    const tike = () => {
         setTime(new Date())
    }

        useEffect (() =>{

        //1.ComponentDidMount 2.ComponentDidUpdete

        let timeD = setInterval(()=>tike(),1000)
        console.log("ComponentDidUpdete");

        //3. ComponentWillUnmount

        return () => {
            clearInterval (timeD)
        }
            
        }, [Time])
    return (
        <div>
             <p>{Time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeFun;
