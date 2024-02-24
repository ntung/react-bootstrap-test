import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";

let carouselData = [
    {
        id: 1,
        image: require("../assets/images/hero-img-1920-1080-01.jpg"),
        title: "Title 1",
        description: "tes tes tes test test Title 1",
        link: "https://www.facebook.com"
    },
    {
        id: 2,
        image: require("../assets/images/hero-img-1920-1080-02.jpg"),
        title: "Title 2",
        description: "tes tes tes test test Title 2",
        link: "https://www.tiktok.com"
    },
    {
        id: 3,
        image: require("../assets/images/hero-img-1920-1080-03.jpg"),
        title: "Title 3",
        description: "tes tes tes test test Title 3",
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
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                                <a className="btn btn-primary" href={slide.link}>Learn more</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
        </section>
    );
}