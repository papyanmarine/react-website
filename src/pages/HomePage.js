

import Hero from '../components/Hero/Hero.js';
import Hotels from '../components/Hotels/Hotels';
import Packages from '../components/Packages/Packages';
import Review from '../components/Review/Review';


function HomePage(props) {
  
  const headerBanner =[
    {
        id: 159721,
        title: 'Trust our Express',
        description: 'Lorem ispum dolar sit ame',
        image: 'https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-1-1920x678.jpg'
    },
    {
        id: 21589,
        title: 'Create your tour',
        description: 'Lorem ispum dolar sit ame lorem set',
        image: 'https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-1-1920x678.jpg'
    },
    {
        id: 365298,
        title: 'Welcome Balli',
        description: 'Lorem ispum dolar sit ame lorem set',
        image: 'https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-1-1920x678.jpg'
    },
]

  return (
    <div className="home-page">
      <Hero headerBanner={headerBanner}/>
      <Packages packages={props.packages}/>
      <Hotels hotels ={props.hotels}/>
      <Review/>
    </div>
  );
}

export default HomePage;
