import logo from './logo.svg';
import './NavigationBar.css';

function NavigationBar() {
    return (
      <div className="Nav">
        <header className="Nav-header">
          <img src={logo} className="Nav-logo" alt="logo" />
        </header>
      </div>
    );
  }
  
  export default NavigationBar;
  
