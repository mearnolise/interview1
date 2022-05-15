import "./css/selectbox.css"
import {useContext} from 'react'
import SelectContext from "../context/SelectContext";
import { useTranslation} from 'react-i18next';

function SelectBox() {


  const {Arrange} = useContext(SelectContext);
  const { t} = useTranslation();

  return (



    <div className="select-background-container"> 
    <div className="select-box-container" >

    <select onChange={e => Arrange(e.target.value)} 
    className="select-box" name="cars" id="cars">
    <option value="increase">{t('increasing')}</option>
    <option value="decrease">{t('descending')}</option>
    <option value="AtoZ">{t('sortAtoZ')}</option>
    <option value="ZtoA">{t('sortZtoA')}</option>

    </select>
    </div>
  </div>
  )
}

export default SelectBox