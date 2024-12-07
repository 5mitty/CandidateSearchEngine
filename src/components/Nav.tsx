import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav_bar'>
      <div className='nav_item'>
        <Link to="/" style={{ marginRight: '10px' }}>
          <button>Search</button>
        </Link>
        <Link to="/SavedCandidates">
          <button>Saved</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;