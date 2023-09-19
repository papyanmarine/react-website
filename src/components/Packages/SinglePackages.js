import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Modal from '../Modal/Modal.js';

import './pages.css'

const SinglePackage =(props)=>{

    const routeParams = useParams();
    const navigate =useNavigate();
    const goBack = ()=> navigate(-1); // na odnu starnicu nazad

    
    return(
        <div className="container">
            <a className='back' onClick={goBack}>Go back</a>
            {
                props.packages.map(item=>{
                    if(item.id === +routeParams.id){
                        return(
                            <div className="single-package fl-row jc-sp-bw" key={item.id}>
                                <div className="img-wrap item-img-wrap">
                                        <img className="single-img packages-img" src={require(
                                            "../images/"+item.image+".png"
                                        )}/>
                                </div>
                                <div className="single-item-body item-body">
                                    <h3 className="single-item-title item-title">
                                        {item.title} <span className="p-bold">{item.bold}</span>
                                    </h3>   
                                    <p className="single-item-text item-text">{item.fullText}</p>
                                    <div className="fl-row single-package-footer a-c">
                                        <p className="single-item-price item-price">{item.price}</p>
                                        <Popup trigger={ 
                                            <button className="buy btn">Buy</button>
                                        }  modal nested>
                                            <Modal></Modal>
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                       )
                    }
                    
                })
            }
           
        </div>
    )
}
export default SinglePackage;