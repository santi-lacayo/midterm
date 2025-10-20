import CarouselSlides from "../components/Carousel";
import { SLIDES } from "../data/CaruselData";

const IntroPage = () => {
    return (
        // obtain the image data from the slides and use the Carousel component
        <div className="relative flex items-center justify-center">
        <CarouselSlides data={SLIDES} />
    
        <div className="absolute z-10 text-center">
            <h1 className="text-5xl font-bold text-blue-800 drop-shadow-lg">
            WELCOME TO THE
            <br />
            LACAYO GALLERY
            </h1>
        </div>
        </div>
    );
    };
      

export default IntroPage;
