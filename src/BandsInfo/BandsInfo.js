import data from '../metal.json'
import './BandsInfo.css'

function BandsInfo() {
    return (
        <div className="BandsInfo">
            <h1>Metal Bands 🤘</h1>
            <h1>Bands: {data.length}</h1>
        </div>
    );
}

export default BandsInfo;
