import React from 'react';

import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return(
        <div className="buttons-panel">
            <button onClick={()=>props.setText('red')}>red</button>
            <button onClick={()=>props.setText('green')}>green</button>
            <button onClick={()=>props.setText('blue')}>blue</button> 
        </div>
    ); 
}

export default ButtonsPanel;