import React, {useState, useEffect, useCallback} from 'react';

import "./Review.css";
import ReviewList from "./ReviewList";

const Review =() =>{

    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState(false);

    const  fetchReviewHandler = useCallback (async () => {
      setIsLoading(true);
  
      const review = [];
      const resUser = await fetch('https://jsonplaceholder.typicode.com/users');
      const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const resPhotos = await fetch('https://jsonplaceholder.typicode.com/photos');
      const users = await resUser.json();
      const posts = await resPosts.json();
      const photos = await resPhotos.json();
   
  
      for (const user of users) {
        for (const post of posts) {
          for (const photo of photos) {
            if(user.id === post.id && user.id === photo.id){
              review.push({
                id: user.id+1589,
                name: user.name,
                photo: photo.url,
                city: user.address.city,
                post: post.body
              });
            }
          }
        }
      }
  
  
    
      setReviews(review);
      setIsLoading(false);
    }, [])
  
    useEffect(() =>{
      fetchReviewHandler();
    }, [fetchReviewHandler]);
  
    return(
        <section className="review">
            <div className="container">
                <div className="review-block">
                    <div className="review-header section-header">
                        <h2 className="section-title">
                        What <span className="p-bold"> Tripma </span> users are saying flight deals
                        </h2>
                        
                    </div>
                    <ReviewList review={reviews} />
                    {/* {!isLoading && reviews.length > 0 && <ReviewList review={reviews} />}
                    {isLoading && <p>Loading...</p>} */}
                </div>
            </div>
        </section>
    )
}
export default Review;