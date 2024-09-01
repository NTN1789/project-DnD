import { useEffect, useState } from 'react'


import SpellCard from '../../components/SpellCard/SpellCard';
import './SpellList.css';
const SpellList = (props) => {

    const [spelList, setSpells] = useState([])
    const [level, setLevel] = useState("");
    const [selectedSpell, setSelectedSpell] = useState(null);
    const [displayLimit, setDisplayLimit] = useState(10); 


    useEffect(() => {
      fetchSpells(level);
    }, [level]);
  
    const fetchSpells = async (level) => {
      const url = "https://www.dnd5eapi.co/api/spells";
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredSpells = level !== ""
          ? data.results.filter(spell => spell.level === parseInt(level))
          : data.results;
  
        setSpells(filteredSpells);
      } catch (error) {
        console.error("Erro ao buscar magias:", error);
      }
    };
  
    const fetchSpellDetails = async (spellIndex) => {
      const url = `https://www.dnd5eapi.co/api/spells/${spellIndex}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSelectedSpell(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da magia:", error);
      }
    };
  
    const loadMoreSpells = () => {
      setDisplayLimit(displayLimit + 10); 
    };
  
    const closeSpellCard = (event) => {
      event.stopPropagation(); 
      setSelectedSpell(null);
    };
  
    return (
     <div>


      <div className='spell-selector'>
      <h1>Mágias de D&D </h1>
      <label htmlFor="spellLevel">Selecione o nível da mágia: </label>
      <select
        id="spellLevel"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        >
        <option value="">Todos os níveis</option>
        <option value="0">Cantrip (Nível 0)</option>
        <option value="1">Nível 1</option>
        <option value="2">Nível 2</option>
        <option value="3">Nível 3</option>
        <option value="4">Nível 4</option>
        <option value="5">Nível 5</option>
        <option value="6">Nível 6</option>
        <option value="7">Nível 7</option>
        <option value="8">Nível 8</option>
        <option value="9">Nível 9</option>
      </select>

      <div className="spell-list-container">
      <div className="spell-list">
        {spelList.slice(0, displayLimit).map((spell) => (
          <div key={spell.index} className="spell-item" onClick={() => fetchSpellDetails(spell.index)}>
            {selectedSpell && selectedSpell.index === spell.index ? (
              <SpellCard spell={selectedSpell} onClose={closeSpellCard} />
            ) : (
              <p>{spell.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
  <div className='container-button'>

      {displayLimit < spelList.length && (
        <button className='load-more-button' onClick={loadMoreSpells}>Carregar mais magias</button>
      )}
      </div>



    </div>
  

  );
};

export default SpellList;