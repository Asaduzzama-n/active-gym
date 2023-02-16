import React from 'react';
import './BreakButton.css'
const BreakButton = ({buttonValue,handleBreak}) => {
    // console.log(buttonValue)
    return (
        <div className='mx-2'>
            <button onClick={()=>handleBreak(buttonValue)}>{buttonValue.time}s</button>
        </div>
    );
};

export default BreakButton;