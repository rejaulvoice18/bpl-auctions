import React from 'react';
import './Auction.css'

const Auction = (props) => {
    // console.log('selected player', props.selectedPlayer)
    const {name, picture, salary} = props.selectedPlayer;
    return (
        <div>
            <div className="selected-player">
                <div className="selected-players-image">
                    <img src={picture}></img>
                </div>
                <div className="selected-players-details">
                    <p>Name: {name}</p>
                    <p>Salary: {salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Auction;