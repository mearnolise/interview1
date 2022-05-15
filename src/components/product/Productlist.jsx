
import Productitem from "./Productitem"
import "./css/productlist.css"
import {useContext,useEffect} from 'react'
import SelectContext from "../../context/SelectContext";

function Productlist() {


  
  const {Data} = useContext(SelectContext);

  useEffect(()=>{
    console.log(Data)
  },[Data])


  
  return (
      <div className="list-body">
      <div className="list-container">

      {Data.map((items)=>(
          <Productitem key={items.id} item={items} />
      ))}
      </div>
      </div>

  )
}

export default Productlist


