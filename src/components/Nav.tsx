import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: '10px' }}>
        <button>Search</button>
      </Link>
      <Link to="/SavedCandidates">
        <button>Saved</button>
      </Link>
    </nav>
  );
};

export default Nav;