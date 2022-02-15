import React from "react";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const Roller = ({numDice, dieFace, bonus}) => {

    const rolls = [];


    for (let i = 0; i < numDice; i++) {
        rolls.push(<div>{getRandomInt(dieFace) + bonus}</div>)
    }

    return (
        <div>{rolls}</div>
    )
}


export default Roller;