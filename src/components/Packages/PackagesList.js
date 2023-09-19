import "./Packages.css";
import {Link} from "react-router-dom";



const PackagesList =(props) =>{

    const packages = props.packages;
    
    return(
        <div className="packages-body">
            <div className="packages-items section-items">
                {packages.map((item)=>{
                    if(item.bestOffer !== 1){
                        return(
                            <div className="packages-item section-item" key={item.id}>
                                <div className="img-wrap item-img-wrap">
                                        <img className="item-img packages-img" src={require(
                                            "../images/"+item.image+".png"
                                        )}/>
                                </div>
                                <div className="item-body">
                                    <div className="fl-row jc-sp-bw">
                                    <Link key={item.id} to={`/packages/${item.id}`} className="item-link">
                                        <h3 className="item-title">
                                        {item.title} <span className="p-bold">{item.bold}</span>
                                        </h3>
                                    </Link>
                                        <p className="item-price">{item.price}</p>
                                    </div>
                                        
                                    <p className="item-text">{item.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            {packages.map((item)=>{
                if(item.bestOffer === 1) {
                    return (
                        <div className="best-offer big-item" key={item.id}>
                        <div className="img-wrap item-img-wrap">
                                <img className="item-img packages-img" src={require(
                                    "../images/"+item.image+".png"
                                )}/>
                            </div>
                            <div className="item-body">
                                <div className="fl-row jc-sp-bw">
                                    <Link key={item.id} to={`/packages/${item.id}`} className="item-link">
                                        <h3 className="item-title">
                                        {item.title} <span className="p-bold">{item.bold}</span>
                                        </h3>
                                    </Link>
                                    <p className="item-price">{item.price}</p>
                                </div>
                                    
                            <p className="item-text">{item.text}</p>
                            </div>
                        </div>
                        )
                    }
                })
            }
           
        </div>
    )
}
export default PackagesList;