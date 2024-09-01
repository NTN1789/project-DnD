import { useState, useEffect } from 'react';

import { getDetails } from '../../services/api-calls';
import { useLocation, useNavigate } from 'react-router-dom';
import './ClassDetails.css';
const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {

    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  }, [location.state.classTitle.url])


  const handleBackClick = () => {
    navigate('/class-list'); 
  };

  return (
    <>
    <button onClick={handleBackClick} className="back-button">Voltar para a lista de classes</button>
        <h1 className='class-description'>Class Details</h1>
      <div className='dnd-classes'>
        {classDetails.name ?
          <div className='dnd-class-card'>
            <img  className='class-icon' src="http://theoldreader.com/kittens/320/240/" alt=""/>
            <h2 className='class-name'>{classDetails.name}</h2>
            <p className='class-description'>Hit die: d{classDetails.hit_die}</p>
                <h2>choices:</h2>
            {classDetails.proficiency_choices.map((proficiency) => (
             <>
             <p className='class-description' key={proficiency.index}>{proficiency.name}
              </p>
                    <p className='class-description'>{proficiency.desc}</p>   
             </>
            ))}
          <h2>Proficiency:</h2>
            {classDetails.proficiencies.map((proficiency) => (
              <p className='class-description' key={proficiency.index}>{proficiency.name}</p>
            ))}

            <h2>start equipament:</h2>
           {classDetails.starting_equipment.map((equipment) => (
              <p className='class-description' key={equipment.index}>{equipment.equipment.name}</p>
            ))}

            <h2>equipament options: </h2>
            {classDetails.starting_equipment_options.map((equipmentOptions) => (
             <>
             <p className='class-description' key={equipmentOptions.index}>{equipmentOptions.name}
              </p>
                <p className='class-description'>{equipmentOptions.desc}</p>
             </>
            ))}
          </div>
          :
          <>
            <h2>Loading class details...</h2>

          </>          
        }
  
      </div>
    </>
  );
}
 
export default ClassDetails;
