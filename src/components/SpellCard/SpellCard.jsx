import React from 'react';
import './SpellCard.css';

const SpellCard = ({ spell,onClose  }) => {
    return (
      <div className="spell-card">
         <button className="close-button" onClick={onClose}>X</button>
        <h2>{spell.name}</h2>
        <p><strong>Nível:</strong> {spell.level}</p>
        <p><strong>Escola:</strong> {spell.school.name}</p>
        <p><strong>Tempo de Conjuração:</strong> {spell.casting_time}</p>
        <p><strong>Alcance:</strong> {spell.range}</p>
        <p><strong>Componentes:</strong> {spell.components.join(', ')}</p>
        <p><strong>Duração:</strong> {spell.duration}</p>
      </div>
    );
  };
  
  export default SpellCard;