import React, { useState } from 'react';
import Fees from './Fees';

function Course(props) {

    const [CourseName , setCourseName] = useState ('React');

    const changeCourse = () => {
        setCourseName ('Node');
        
    }

    
    return (
        <div>
            <p>{CourseName}</p>
            <button onClick ={() => changeCourse()}>Chenge Course</button>
            <Fees Course_name ={CourseName} />
        </div>
    );
}

export default Course;