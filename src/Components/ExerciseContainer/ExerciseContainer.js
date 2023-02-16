import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import './ExerciseContainer.css'
import Exercise from '../Exercise/Exercise';
import { addToDb } from '../../Utilities/fakeDb';
const ExerciseContainer = () => {


    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleTaskList = (selectedExercise)=>{


        addToDb(selectedExercise._id);
    } 
    return (
        <div className="exercises-body">
            <div className='exercises-container py-5'>
                <div className="logo-container d-flex">
                    <FontAwesomeIcon icon={faDumbbell} color="#8081e6" size="3x" />

                    <h1 >ULTRA-ACTIVE-CLUB</h1>
                </div>

                <div className="mt-5">
                    <h4>Select today's exercise</h4>
                </div>
                <div className='exercises-section mt-5 row'>
                    {
                        exercises.map(exercise => <Exercise handleTaskList={handleTaskList} exercise={exercise} key={exercise._id}></Exercise>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExerciseContainer;