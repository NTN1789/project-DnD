import { getMonsterList } from "../../services/api-calls";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './monsterList.css';

const MonsterList = (props) => {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    getMonsterList()
    .then(monsterData => setMonsterList(monsterData.results))
  }, [])

  return ( 
    <>
   

      <div className="monster-list-container "> 

      <div className="monster-list">
      {monsterList.length ? 
      <>
        {monsterList.map((monster) => (
          <div key={monster.index}>
            <Link
              to="/monster"
              state={{ monster }}
            >
              {monster.name}
            </Link><br/>
          </div>
        ))}
      </>
      :
      <>
        <h2>Loading scary monsters...</h2>
      </>}
      </div>
      </div>
      
    </>
  );
}
 
export default MonsterList;