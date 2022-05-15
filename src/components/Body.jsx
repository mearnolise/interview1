import "./css/body.css";
import SelectBox from "./SelectBox";
import Productlist from "./product/Productlist";
import { useTranslation} from 'react-i18next';

function Body() {

  const {t} = useTranslation();

  return (
    <div className="body-container">
      <div className="body-top">
        <div className="body-top1">
          <div className="text-1">
            <h1>{t('Weekly Recommend')}</h1>
          </div>
          <hr className="line"></hr>
        </div>
        <div className="body-top2">
          <SelectBox/>
        </div>
      </div>
      <Productlist/>
    </div>
)}
 export default Body;
