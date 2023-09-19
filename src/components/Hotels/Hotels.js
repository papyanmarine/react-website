import "./Hotels.css";
import HotelsList from "./HotelsList.js";
import {Link} from "react-router-dom"

const Hotels =(props) =>{
    return(
        <section className="hotels section">
            <div className="container">
                <div className="hotels-block">
                    <div className="hotels-header section-header fl-row jc-sp-bw">
                        <h2 className="section-title">
                            Explore unique <span className="g-bold">places to stay</span>
                        </h2>
                        <Link className="fl-row a-c" to='/hotels'> 
                            <span className="all">All</span>
                            <span className="arrow">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 16.5H25.5M25.5 16.5L18 9M25.5 16.5L18 24" stroke="#A1B0CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </span>
                        </Link>
                    </div>
                    <div className="hotels-body">
                        <HotelsList hotels={props.hotels}/>
                        <div className="link-wrap fl-row j-c">
                            <Link className="more" to='/hotels'>
                                Explore more stays</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hotels;