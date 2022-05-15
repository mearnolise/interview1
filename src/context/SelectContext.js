import {createContext,useState} from 'react'
import ProductData from '../components/product/ProductData';

const SelectContext = createContext()


export const SelectProvider =({children}) =>{

    const [Data,setData] = useState(ProductData);


    
    const Arrange =(xxx) =>{
        const dummy = [...ProductData]
       switch (xxx) {
        case 'increase':
            setData(dummy.sort((a,b)=> a.price - b.price))
            break;
        case 'decrease':
            setData(dummy.sort((a,b)=> b.price - a.price))
            break;
        case 'AtoZ':
            setData(dummy.sort((a,b)=> a.name.localeCompare(b.name)))
            break;
        case 'ZtoA':
            setData(dummy.sort((a,b)=> b.name.localeCompare(a.name)))
            break;
        default:
            break;    
       }
    }







return (<SelectContext.Provider
    value={{
        Data,
        Arrange,
    }}>
        {children}
    </SelectContext.Provider>
    )

}
export default SelectContext