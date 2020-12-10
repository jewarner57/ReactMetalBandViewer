import './Band.css'
import Like from '../Like/Like'

function Band(props) {
    return (
        <div className="Band">
            <div className="BandInner">
                <div className="BandDetail">
                    <h1>{props.band_name}</h1>
                    <p>Origin: {props.origin}</p>
                    <p>Formed: {props.formed}</p>
                    <p>Split: {props.split}</p>
                    <p>Style: {props.style}</p>
                    <p>Fans: {(props.fans * 1000).toLocaleString('en')}</p>
                </div>
                {props.split === '-' &&
                    <Like></Like>
                }
            </div>
        </div>
    );
}

export default Band;
