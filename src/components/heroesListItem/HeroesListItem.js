import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { deleteData } from "../../store/heroes/heroesThunk";

const HeroesListItem = ({ name, description, element, id }) => {

    let elementClassName;
    const dispatch = useDispatch()

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    const handleDelete = () => {
        dispatch(deleteData(id))
        window.location.reload()
    }

    return (
        <Fade left>
            <li
                className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
                <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg"
                    className="img-fluid w-25 d-inline"
                    alt="unknown hero"
                    style={{ 'objectFit': 'cover' }} />
                <div className="card-body">

                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                    <button onClick={() => handleDelete()} type="button" className="btn-close btn-close" aria-label="Close"></button>
                </span>
            </li>
        </Fade>
    )
}

export default HeroesListItem;