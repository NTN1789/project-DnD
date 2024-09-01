import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/api-calls';
import { useLocation, useNavigate } from 'react-router-dom';
import './monsterDetails.css';

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({});
  const [monsterImage, setMonsterImage] = useState('');

  let location = useLocation();
  const navigate = useNavigate();

  const fetchMonsterDetails = async (monsterUrl) => {
    try {
      const monsterData = await getDetails(monsterUrl);

      // Definir os detalhes do monstro no estado
      setMonsterDetails(monsterData);
      
      const imageUrl = `https://www.dnd5eapi.co/api/images/monsters/${monsterData.index}`;
      setMonsterImage(imageUrl);
    } catch (error) {
      console.error("Error fetching monster details:", error);
    }
  };

  useEffect(() => {
    if (location.state?.monster?.url) {
      fetchMonsterDetails(location.state.monster.url);
    }
  }, [location.state]);

  const handleBackClick = () => {
    navigate('/monster-list');
  };

  return ( 
    <div className="monster-card">
      <h3>Monster Details</h3>

      {monsterDetails.name ? (
        <div>
          <button onClick={handleBackClick} className="back-button">
            Voltar para a lista de monstros
          </button>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{monsterDetails.name}</td>
              </tr>
              <tr>
                <th>Alignment</th>
                <td>{monsterDetails.alignment}</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>{monsterDetails.size}</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{monsterDetails.type}</td>
              </tr>
              <tr>
                <th>Challenge Rating</th>
                <td>{monsterDetails.challenge_rating}</td>
              </tr>
              <tr>
                <th>Hit Dice</th>
                <td>{monsterDetails.hit_dice}</td>
              </tr>
              <tr>
                <th>Dexterity</th>
                <td>{monsterDetails.dexterity}</td>
              </tr>
              <tr>
                <th>Hit Points</th>
                <td>{monsterDetails.hit_points}</td>
              </tr>
              <tr>
                <th>Hit Points Roll</th>
                <td>{monsterDetails.hit_points_roll}</td>
              </tr>
              <tr>
                <th>XP</th>
                <td>{monsterDetails.xp}</td>
              </tr>
            </tbody>
          </table>
          {monsterImage && (
            <img
              src={monsterImage}
              alt={monsterDetails.name || "Monster"}
              className="monster-image"
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default MonsterDetails;

