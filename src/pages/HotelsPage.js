import HotelsList from "../components/Hotels/HotelsList";

const HotelsPage = (props) => {

      return (
        <div className="hotels-page">
          <div className="container">
            <HotelsList hotels={props.hotels}/>
          </div>
         
        </div>
      );
}
export default HotelsPage;