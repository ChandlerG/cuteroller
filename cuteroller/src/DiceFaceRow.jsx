import React from 'react';
import {Button} from "react-bootstrap";

const DiceFaceRow = ({setter}) => {


    return (
        <div>
            <Button onClick={() => setter(2)} variant="primary">2</Button>
            <Button onClick={() => setter(4)} variant="primary">4</Button>
            <Button onClick={() => setter(6)} variant="primary">6</Button>
            <Button onClick={() => setter(8)} variant="primary">8</Button>
            <Button onClick={() => setter(10)} variant="primary">10</Button>
            <Button onClick={() => setter(12)} variant="primary">12</Button>
            <Button onClick={() => setter(20)} variant="primary">20</Button>
        </div>
    )
}
export default DiceFaceRow;