import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ title, text, buttonText, onButtonClick }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary" onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;