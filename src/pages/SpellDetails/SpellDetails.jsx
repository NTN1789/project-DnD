import { useState, useEffect } from 'react';
import { getSpellDetails } from '../../services/api-calls';

import { useParams ,useLocation, useNavigate } from 'react-router-dom';
import './SpellDetails.css';
const SpellDetails = (props) => {
  const [spellDetails, setSpellDetails] = useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const { spellName } = useParams()

  useEffect(() => {
    getSpellDetails(spellName)
    .then(spellData => setSpellDetails(spellData))
  }, [])

 
  const handleBackClick = () => {
    navigate('/spell-search'); 

  };


  return (
    <>
    
     <button onClick={handleBackClick}   className="back-button"  >Voltar para a lista de mágias</button>
  
      <h3>Spell Details</h3>
<div className='spell-Details'>

      { spellDetails.name ? 
        <div className='details-class-card '>
          <h1 className='class-description'>{spellDetails.name}</h1>
          <p className='class-description'>{spellDetails.desc}</p>
          <p className='class-description'>{spellDetails.higher_level}</p>
          <p className='class-description'>{spellDetails.range}</p>
          <p className='class-description'>{spellDetails.components}</p>
        <p className='class-description'>{spellDetails.material}</p>
        <p className='class-description'>{spellDetails.ritual}</p>
        <p className='class-description'>{spellDetails.duration}</p>
        <p className='class-description'>{spellDetails.concentration}</p>
        <p className='class-description'>{spellDetails.casting_time}</p>
        <p className='class-description'>{spellDetails.level}</p>
        <p className='class-description'>{spellDetails.attack_type}</p>
        <p className='class-description'>{spellDetails.school.name}</p>


          <h2>Spell Player Classes</h2>
          {spellDetails.classes.length ?
          <>
            {spellDetails.classes.map(playerClass =>
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
            )}

            
          </>
          :
          <p>No player classes may use this spell</p>
        }

          {spellDetails.subclasses.length ?
          <>
            <h2>Spell Subclasses</h2>
            {spellDetails.subclasses.map(subclass =>
              <div key={subclass.index}>
                <p>{subclass.name}</p>
              </div>
            )}
          </>
          :
          <p>No subclasses may use this spell</p>}
        </div>
        :
        <>
          <p>Loading spell details...</p>
        </>
      }
      </div>
   
    </>
  );
}
 
export default SpellDetails;