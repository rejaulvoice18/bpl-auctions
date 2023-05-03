import React from 'react';
import './Salary.css';
import Auction from '../Auction/Auction';

const Salary = (props) => {
    const salary = props.salary;
    // console.log('salary is here', salary)
    let total = 0;
    total = salary.reduce((total, singleSal) => total + singleSal.salary, 0)
    return (
        <div className="salary-details">
            <h2>Auction Players Details</h2>
            <h3>Selected Players: <span className="total-salary">{salary.length}</span></h3>
            <p>Total Salary: <span className="total-salary">{total}</span></p>
            <p className="title-style">=======Selected Players List========</p>
            <div className="selected-players">
                {
                    salary.map(auctionedPlayer => <Auction selectedPlayer={auctionedPlayer}></Auction>)
                }
            </div>
        </div>
    );
};

export default Salary;