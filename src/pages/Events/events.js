import Carousel from "../../components/carousel/carousel";
import SearchPage from "../../components/search/search";

function HomePage(){
    return(
      <>
      <div className="home">
        <center><h5 className="heading">AUTOMATE HISTORY TAKING & DIAGNOSIS</h5></center>
        <p>Using our app you will be able to talk 
          with AI powered medical chatbot, who will 
          understand your disease and will auto generate 
          the medical prescription for you.</p>

          <Carousel/>
        <center><h5 className="heading">AUTOMATE HISTORY TAKING & DIAGNOSIS</h5></center>
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi sit amet gravida sem, a faucibus tortor. 
          Vivamus eleifend vulputate orci, a iaculis lectus cursus nec. 
          Nulla vulputate eros in leo placerat, ullamcorper vestibulum dui malesuada. 
          ec tempor lacus nec lorem molestie, non tincidunt metus lacinia. Etiam eget nibh elit. 
          Curabitur sed tristique quam. Nulla a hendrerit justo, at bibendum sapien. 
          Integer ac nunc sed ligula porttitor pellentesque vitae sed erat. Vestibulum quis neque nisl. 
          Donec pulvinar sem in venenatis congue. Aliquam at nisi eu augue finibus feugiat. 
          Phasellus volutpat porttitor felis, et dictum dolor facilisis nec. 
          Fusce vulputate ut dui nec egestas. Nullam eu neque quis nibh luctus fringilla. 
          Curabitur egestas tortor quam, sit amet laoreet lectus mollis quis.</p>
      
      </div>
      <SearchPage/>

      </>
    );
  };
  
  export default HomePage;