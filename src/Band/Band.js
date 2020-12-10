import './Band.css'
import Like from '../Like/Like'

function Band(props) {
    return (
        <div className="Band">
            <div className="BandInner">
                <div>
                    <h1>{props.band_name}</h1>
                    <p>Formed: {props.formed}</p>
                    <p>Split: {props.split}</p>
                    <p>Origin: {props.origin}</p>
                    <p>Fans: {props.fans}</p>
                </div>
                {props.split === '-' &&
                    <Like></Like>
                }
            </div>
        </div>
    );
}

export default Band;
