import { Link } from 'react-router-dom'

const SpellCardSearch = (props) => {
  return (
    <>
      <Link to={`/spell/${props.spell.index}`}>
        {props.spell.name}
      </Link><br />
    </>
  );
}

export default SpellCardSearch;