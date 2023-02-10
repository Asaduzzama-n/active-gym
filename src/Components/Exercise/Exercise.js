import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {time,age,picture,name} = props.exercise;
    return (
        <div className='exercise-box col-md-5 col-lg-3 mx-3  my-3'>
            <img className='exercise-img' src={picture} alt="" />
            <h3 className='my-3'>{name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente porro ex
                 nihil ab!  necessitatibus!</p>
            <h5>For age: <span className='font-bold'>{age}</span></h5>
            <h6>Time Required: <span className='font-bold'>{time}s</span> </h6>
            <button>Add to List</button>
        </div>
    );
};

export default Exercise;