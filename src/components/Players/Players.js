import React, { useEffect, useState } from 'react';
import './Players.css';
import playersData from '../playersData/data.json';
import Player from '../Player/Player';
import Salary from '../Salary/Salary';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [salary, setSalary] = useState([]);

    useEffect(() => {
        setPlayers(playersData);
    })

    function handleAddSalary(singleSalary){
        // console.log('Button Clicked', singleSalary);
        const newSalary = [...salary, singleSalary];
        setSalary(newSalary);
    }
    return (
        <div className="all-players">
            <section className="header">
                <h2>Bangladesh Premier League Auction</h2>
                <nav className="navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Players</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </section>
            <section className="all-players-container">
                <div className="all-players-list">
                    {
                        players.map(plList => <Player 
                            player={plList}
                            handleAddSalary ={handleAddSalary}
                            ></Player>)
                    }
                </div>
                <div className="auction-players">
                    <Salary salary={salary}></Salary>
                </div>
            </section>
        </div>
    );
};

export default Players;