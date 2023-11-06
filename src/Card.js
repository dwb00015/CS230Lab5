import React from 'react';
import './Card.css';

function Card(){
    return(
        <div className="card-container"><div className="card">
            <h1>Card 1</h1>
            <p>This is card 1</p>
        </div><div className="card">
                <h1>Card 2</h1>
                <p>This is card 2</p>
            </div><div className="card  ">
                <h1>Card 3</h1>
                <p>This is card 3</p>
            </div></div>
    );
}

export default Card;