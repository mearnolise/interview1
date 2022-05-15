import "./css/productitem.css"

function Productitem(item) {


  return (
    <div className="product-box" >


    <div className="picture-box">
      <img src={item.item.imageUrl} alt="product" className="product-pic"/>
      <div className="sale"> ส่วนลด {item.item.discount} บาท</div>
    </div>
    <div className="Name-text-box"><h2>{item.item.name}</h2></div>
    <div className="description-box"><p>{item.item.description}</p></div>
    
    <div className="text-start-price"><p>เริ่มต้นเพียง</p></div>
    <div className="">
      <h3 className="text-price">{item.item.price}</h3>
      <h3 className="text-price2">{item.item.price -item.item.discount}</h3>
      </div>
    
    </div>

  )
}

export default Productitem