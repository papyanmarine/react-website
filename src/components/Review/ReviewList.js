import React from 'react';
import Slider from "react-slick";
import 'reactjs-popup/dist/index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ReviewList =(props)=>{

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
      };


    return(
        <div className="review-items ">
            <Slider {...settings}>
                {Array.from(props.review).map((item)=>{
                    if(props.review.length > 0){
                        return(
                    <div className="review-item section-item" key={item.id}>
                        <div className='fl-row jc-sp-bw'>
                            <div className="img-wrap item-img-wrap">
                                <img className="item-img review-img" src={item.photo}/>
                            </div>
                            <div className="review-item-body">
                                <p className="item-name">{item.name}</p>
                                <p className="item-location">{item.city}</p>
                                <div className="starts">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5754 3.68294C11.771 3.36828 12.229 3.36828 12.4246 3.68294L14.908 7.67708C14.9768 7.78779 15.0862 7.86723 15.2127 7.89849L19.7788 9.02605C20.1385 9.11488 20.28 9.55042 20.0412 9.83372L17.01 13.4298C16.9259 13.5295 16.8842 13.658 16.8936 13.788L17.2322 18.4791C17.2588 18.8486 16.8884 19.1178 16.5451 18.9782L12.1883 17.2066C12.0676 17.1575 11.9324 17.1575 11.8117 17.2066L7.45488 18.9782C7.11165 19.1178 6.74115 18.8486 6.76783 18.4791L7.10644 13.788C7.11583 13.658 7.07406 13.5295 6.99004 13.4298L3.95879 9.83372C3.71999 9.55042 3.86151 9.11488 4.22122 9.02605L8.78727 7.89849C8.91383 7.86723 9.02318 7.78779 9.09202 7.67708L11.5754 3.68294Z" fill="url(#paint0_linear_3155_1434)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3155_1434" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#605DEC"/>
                                        <stop offset="1" stopColor="#2A26D9"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5754 3.68294C11.771 3.36828 12.229 3.36828 12.4246 3.68294L14.908 7.67708C14.9768 7.78779 15.0862 7.86723 15.2127 7.89849L19.7788 9.02605C20.1385 9.11488 20.28 9.55042 20.0412 9.83372L17.01 13.4298C16.9259 13.5295 16.8842 13.658 16.8936 13.788L17.2322 18.4791C17.2588 18.8486 16.8884 19.1178 16.5451 18.9782L12.1883 17.2066C12.0676 17.1575 11.9324 17.1575 11.8117 17.2066L7.45488 18.9782C7.11165 19.1178 6.74115 18.8486 6.76783 18.4791L7.10644 13.788C7.11583 13.658 7.07406 13.5295 6.99004 13.4298L3.95879 9.83372C3.71999 9.55042 3.86151 9.11488 4.22122 9.02605L8.78727 7.89849C8.91383 7.86723 9.02318 7.78779 9.09202 7.67708L11.5754 3.68294Z" fill="url(#paint0_linear_3155_1434)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3155_1434" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#605DEC"/>
                                        <stop offset="1" stopColor="#2A26D9"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5754 3.68294C11.771 3.36828 12.229 3.36828 12.4246 3.68294L14.908 7.67708C14.9768 7.78779 15.0862 7.86723 15.2127 7.89849L19.7788 9.02605C20.1385 9.11488 20.28 9.55042 20.0412 9.83372L17.01 13.4298C16.9259 13.5295 16.8842 13.658 16.8936 13.788L17.2322 18.4791C17.2588 18.8486 16.8884 19.1178 16.5451 18.9782L12.1883 17.2066C12.0676 17.1575 11.9324 17.1575 11.8117 17.2066L7.45488 18.9782C7.11165 19.1178 6.74115 18.8486 6.76783 18.4791L7.10644 13.788C7.11583 13.658 7.07406 13.5295 6.99004 13.4298L3.95879 9.83372C3.71999 9.55042 3.86151 9.11488 4.22122 9.02605L8.78727 7.89849C8.91383 7.86723 9.02318 7.78779 9.09202 7.67708L11.5754 3.68294Z" fill="url(#paint0_linear_3155_1434)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3155_1434" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#605DEC"/>
                                        <stop offset="1" stopColor="#2A26D9"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5754 3.68294C11.771 3.36828 12.229 3.36828 12.4246 3.68294L14.908 7.67708C14.9768 7.78779 15.0862 7.86723 15.2127 7.89849L19.7788 9.02605C20.1385 9.11488 20.28 9.55042 20.0412 9.83372L17.01 13.4298C16.9259 13.5295 16.8842 13.658 16.8936 13.788L17.2322 18.4791C17.2588 18.8486 16.8884 19.1178 16.5451 18.9782L12.1883 17.2066C12.0676 17.1575 11.9324 17.1575 11.8117 17.2066L7.45488 18.9782C7.11165 19.1178 6.74115 18.8486 6.76783 18.4791L7.10644 13.788C7.11583 13.658 7.07406 13.5295 6.99004 13.4298L3.95879 9.83372C3.71999 9.55042 3.86151 9.11488 4.22122 9.02605L8.78727 7.89849C8.91383 7.86723 9.02318 7.78779 9.09202 7.67708L11.5754 3.68294Z" fill="url(#paint0_linear_3155_1434)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3155_1434" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#605DEC"/>
                                        <stop offset="1" stopColor="#2A26D9"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5754 3.68294C11.771 3.36828 12.229 3.36828 12.4246 3.68294L14.908 7.67708C14.9768 7.78779 15.0862 7.86723 15.2127 7.89849L19.7788 9.02605C20.1385 9.11488 20.28 9.55042 20.0412 9.83372L17.01 13.4298C16.9259 13.5295 16.8842 13.658 16.8936 13.788L17.2322 18.4791C17.2588 18.8486 16.8884 19.1178 16.5451 18.9782L12.1883 17.2066C12.0676 17.1575 11.9324 17.1575 11.8117 17.2066L7.45488 18.9782C7.11165 19.1178 6.74115 18.8486 6.76783 18.4791L7.10644 13.788C7.11583 13.658 7.07406 13.5295 6.99004 13.4298L3.95879 9.83372C3.71999 9.55042 3.86151 9.11488 4.22122 9.02605L8.78727 7.89849C8.91383 7.86723 9.02318 7.78779 9.09202 7.67708L11.5754 3.68294Z" fill="url(#paint0_linear_3155_1434)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3155_1434" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#605DEC"/>
                                        <stop offset="1" stopColor="#2A26D9"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="item-txt">{item.post}.</p>
                            </div>
                        </div>
                        
                    </div>
                    )
                    }
                })}
            </Slider>
        </div>
    )
}
export default ReviewList;