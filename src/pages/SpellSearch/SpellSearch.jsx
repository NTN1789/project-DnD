import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { spellSearch } from '../../services/api-calls';
import SpellCardSearch from '../../components/SpellCard/SpellCardSearch';
import './SpellSearch.css';
const SpellSearch = (props) => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = formData => {
    spellSearch(formData)
    .then(spellResults => setSpells(spellResults.results))
  }

  return (
    <>
   

<div className="spell-search">
      <SearchForm handleSpellSearch={handleSpellSearch} />
      </div>
      <div className="spell-list-container"> 
      <div className="spell-list">
      {spells.length ? (
        <div>
          {spells.map((spell) => (
            <SpellCardSearch key={spell.index} spell={spell}  />
          ))}
        </div>
      ) : (
        <h3>Por favor procurar uma mágia!</h3>
      )}
   </div>
   </div>
    
    </>
  );
}
 
export default SpellSearch;