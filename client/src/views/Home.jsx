import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.svg';
import homeStyle from './Home.module.css';

function Home() {
  return (
    <div className={homeStyle['App']}>
      <header className={homeStyle['App-header']}>
        <img src={logo} className={homeStyle['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={homeStyle['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/about" className={homeStyle['App-link']}>
          About
        </Link>
      </header>
    </div>
  );
}

export default Home;
