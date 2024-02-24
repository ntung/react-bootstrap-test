export  default function ExampleCarouselImage(props) {

    return (
        <img src={props.image} alt={props.alt} className="d-block w-100" />
    );
}