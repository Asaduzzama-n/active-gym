import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ProfileContainer.css'

const ProfileContainer = () => {
    return (
        <div className='user-profile-container'>
            <div className="user-info d-flex align-items-center ">
                 <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />

                 <div className=" mx-3">
                    <h3>Asaduzzaman</h3>
                    
                    <div className="d-flex  align-items-center sub-text">
                        <FontAwesomeIcon icon={faLocationDot} size="1x" color='#A2B0C4' ></FontAwesomeIcon>
                        <p className='my-0 mx-2'>Dhaka, Bangladesh</p>
                    </div>

                 </div>
            </div>


            <div className="row row-cols-3 mt-5 user-description">
                <div className="col">
                    <h4><span className='fw-bold fs-2'>75</span><span className='sub-text'>kg</span></h4>
                    <p><span className='fw-light fs-5'>Weight</span></p>
                </div>
                <div className="col">
                    <h4><span className='fw-bold fs-2'>6.5</span></h4>
                    <p><span className='fw-light fs-5'>Height</span></p>
                </div>
                <div className="col">
                    <h4><span className='fw-bold fs-2'>25</span><span className='sub-text'>yrs</span></h4>
                    <p><span className='fw-light fs-5'>Age</span></p>
                </div>
            </div>

            <div className="row mt-5">
                <h2>Add A Break</h2>
            </div>

            <div className="row row-cols-5 my-3 button-container">
                <div className="col">
                    <button>10s</button>
                </div>
                <div className="col">
                    <button>20s</button>
                </div>
                <div className="col">
                    <button>30s</button>
                </div>
                <div className="col">
                    <button>40s</button>
                </div>
                <div className="col">
                    <button>50s</button>
                </div>
            </div>


            <div className="row mt-5">
                <h2>Exercise Details</h2>
            </div>

            <div className="exercise-info d-flex align-items-center justify-content-between my-3">
                <h5>Exercise time</h5>
                <h6><span className='sub-text'>200 seconds</span></h6>
            </div>

            <div className="break-info d-flex align-items-center justify-content-between my-3">
                <h5>Break time</h5>
                <h6><span className='sub-text'>15 seconds</span></h6>
            </div>

            <div className="complete-button my-5">
                <button>Activity Completed</button>
            </div>


        </div>
    );
};

export default ProfileContainer;