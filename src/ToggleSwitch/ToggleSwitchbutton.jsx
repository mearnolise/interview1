import React, { useState ,useEffect} from 'react';
import ToggleSwitch from './ToggleSwitch'
import ToggleContext from '../context/ToggleContext';
import { useTranslation} from 'react-i18next';
import {useContext} from 'react'



function ToggleSwitchbutton() {

    const {lang,ChangeLang} = useContext(ToggleContext);
    const { i18n } = useTranslation();

    useEffect(()=>{
      i18n.changeLanguage(lang)
    },[lang,i18n])

    let [newsletter, setNewsletter] = useState(true);
    
    const onNewsletterChange = (checked) => {
      setNewsletter(checked);
      ChangeLang(checked);
    }
    
    return (
      <>
        <ToggleSwitch id="newsletter" checked={ newsletter } onChange={ onNewsletterChange } />
      </>
    );
}

export default ToggleSwitchbutton
