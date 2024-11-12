import logo from './logo.svg';
import './NavigationBar.css';

function NavigationBar() {
    return (
      <div className="Nav">
        <header className="Nav-header">
          <img src={logo} className="Nav-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  export default NavigationBar;
  
