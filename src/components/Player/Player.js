import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props);
    const {name, picture, salary, country} = props.player;
    return (
        <div className="single-player">
            <div className="player-image">
                <img src={picture}></img>
            </div>
            <div className="player-details p-3">
                <h2><span className="title-styling">Name:</span> {name}</h2>
                <p><span className="title-styling">Country:</span> {country}</p>
                <p><span className="title-styling">Salary:</span> {salary} Taka</p>
                <button className="btn btn-warning text-dark mt-5 fw-bold" onClick={() => props.handleAddSalary(props.player)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Player;