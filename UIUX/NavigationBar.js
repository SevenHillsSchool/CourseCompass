import logo from './logo.png';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="Nav">
            <div class="rectangle"></div>
            <header className="Nav-header">
                <img src={logo} className="Nav-logo" alt="logo" />
                <a
                    className="Home-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Home
                </a>
            </header>
        </div>
    );
  }
  
  export default NavigationBar;
  
