import "./css/navbar.css";
import ToggleSwitchbutton from "../ToggleSwitch/ToggleSwitchbutton";
import { useTranslation} from 'react-i18next';



function Navbar() {

  const { t} = useTranslation();


  return (
    
    <div className="navbar-container">
      
      <div className="navbar-button-container">
          <div className="toggle-button-box">
          <ToggleSwitchbutton />
          </div>
          <div className="button-box">
          <button className="button-login">{t('login')}</button>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
