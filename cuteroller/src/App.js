import './App.css';
import ButtonRow from "./ButtonRow";
import React, {useState} from "react";
import DiceFaceRow from "./DiceFaceRow";
import doit from './doit.png'
import Roller from "./Roller";
import Button from "react-bootstrap/Button";

function App() {

    const [numDice, setNumDice] = useState(-1);
    const [dieFace, setDieFace] = useState(-1);
    const [bonus, setBonus] = useState(-1);
    const [didIt, dewIt] = useState(false);


    const clear = () => {
        setNumDice(-1);
        setDieFace(-1);
        setBonus(-1);
        dewIt(false);
    }


    return (
        <div className="App">

            <header className="App-header">
                Bwandon,
                <div className='rowC'> Number of Dice: <ButtonRow setter={setNumDice}/></div>
                <div className='rowC'> Dice Type: <DiceFaceRow setter={setDieFace}/></div>
                <div className='rowC'> Bonus: <ButtonRow setter={setBonus}/></div>

                {numDice >= 0 && <div>I'll roll {numDice} </div>}
                {dieFace >= 0 && <div>d{dieFace} dice </div>}
                {bonus >= 0 && <div>with a +{bonus} modifier </div>}

                <img style={{cursor:'pointer'}} className="center-fit" src={doit} alt="dewit" onClick={() => dewIt(true)} />
                {didIt && numDice >= 0 && dieFace >= 0 && bonus >= 0 && <Roller numDice={numDice} dieFace={dieFace} bonus={bonus} />}
                {didIt && <Button variant="primary" onClick={() => clear()}>Clear</Button>}

            </header>


        </div>
    );
}

export default App;
