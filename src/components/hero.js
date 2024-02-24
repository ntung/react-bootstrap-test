import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import 'font-awesome/css/font-awesome.min.css';

let carouselData = [
    {
        id: 1,
        image: require("../assets/images/hero-img-1920-1080-01.jpg"),
        title: "You need to have a web-based app to help your business but you don't know where to start.",
        description: "Starting a business is not easy.",
        link: "https://www.facebook.com"
    },
    {
        id: 2,
        image: require("../assets/images/hero-img-1920-1080-02.jpg"),
        title: "We can bespoke your need by breaking down it into hours and complete less time as expected.",
        description: "Your existing service was not developed by us but we can make sure to fix or expand as your need.",
        link: "https://www.tiktok.com"
    },
    {
        id: 3,
        image: require("../assets/images/hero-img-1920-1080-03.jpg"),
        title: "We know you care about services prices, however, we pledge performance and reasonable price.",
        description: "Going with us, you are likely happy.",
        link: "https://www.twitter.com"
    }

];
export default function AppHero() {

    return (
        <section id="home" className="hero-block">
        <Carousel>
            {
                carouselData.map(slide => {
                    return (
                        <Carousel.Item key={slide.id}>
                            <ExampleCarouselImage image={slide.image} alt={"Slide " + slide.id}/>
                            {/* the statement below renders the same result */}
                            {/*<img src={slide.image} alt={slide.alt} className="d-block w-100"/>*/}
                            <Carousel.Caption>
                                <h1>{slide.title}</h1>
                                <h3 className="slide-image-description">{slide.description}</h3>
                                <a className="btn btn-primary" href={slide.link} target="_blank">
                                    Learn more&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-chevron-right"></i></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
        </section>
    );
}