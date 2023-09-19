import "./Packages.css";
import PackagesList from "./PackagesList";
import {Link} from 'react-router-dom'

const Packages =(props) =>{
   
    
    return(
        <section className="packages section">
            <div className="container">
                <div className="packages-block">
                    <div className="packages-header section-header fl-row jc-sp-bw">
                        <h2 className="section-title">
                            Explore unique places to stay <span className="p-bold">flight deals</span>
                        </h2>
                        <Link className="fl-row a-c" to ='/packages'> 
                            <span className="all">All</span>
                            <span className="arrow">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 16.5H25.5M25.5 16.5L18 9M25.5 16.5L18 24" stroke="#A1B0CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </span>
                        </Link>
                    </div>
                    
                    <PackagesList packages={props.packages}/>
                    
                </div>
            </div>
            
        </section>
    )
}
export default Packages;