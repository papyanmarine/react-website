import "./Hotels.css";



const HotelsList =(props) =>{
    const  hotels = props.hotels;
    return(
        <div className="hotels-items section-items">
            {
                hotels.map((item)=>{
                    return(
                    <div className="hotels-item section-item" key={item.id}>
                        <div className="img-wrap item-img-wrap">
                            <img className="item-img hotels-img" src={require(
                                "../images/"+item.image+".png"
                            )}/>
                        </div>
                        <div className="item-body">
                            <h3 className="item-title">
                               {item.title}  <span className="g-bold">{item.bold}</span>
                            </h3>
                            <p className="item-text">{item.text}</p>
                        </div>
                        <div className="hide-block">
                            <button className="book">Book</button>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
export default  HotelsList;