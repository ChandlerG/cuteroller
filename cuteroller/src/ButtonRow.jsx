import React from 'react';
import {Button} from "react-bootstrap";

const ButtonRow = ({setter}) => {


    return (
        <div>
            <Button onClick={() => setter(1)} variant="primary">1</Button>
            <Button onClick={() => setter(2)} variant="primary">2</Button>
            <Button onClick={() => setter(3)} variant="primary">3</Button>
            <Button onClick={() => setter(4)} variant="primary">4</Button>
            <Button onClick={() => setter(5)} variant="primary">5</Button>
            <Button onClick={() => setter(6)} variant="primary">6</Button>
            <Button onClick={() => setter(7)} variant="primary">7</Button>
            <Button onClick={() => setter(8)} variant="primary">8</Button>
            <Button onClick={() => setter(9)} variant="primary">9</Button>
            <Button onClick={() => setter(10)} variant="primary">10</Button>
        </div>
    )
}
export default ButtonRow;