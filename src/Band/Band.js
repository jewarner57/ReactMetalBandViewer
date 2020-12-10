import './Band.css'
import Like from '../Like/Like'

function Band(props) {
    return (
        <div className="Band">
            <h1>{props.band_name}</h1>
            <p>Formed: {props.formed}</p>
            <p>Split: {props.split}</p>
            <p>{props.origin}</p>
            <p>Fans: {props.fans}</p>

            <Like></Like>
        </div>
    );
}

export default Band;
