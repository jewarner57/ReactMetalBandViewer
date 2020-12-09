import './BandsInfo.css'

function BandsInfo(props) {
    return (
        <div className="BandsInfo">
            <h1>Metal Bands 🤘</h1>
            <h1>Bands: {props.data.length}</h1>
        </div>
    );
}

export default BandsInfo;
