import './App.css';
import Heading from '../Heading/Heading'
import BandsInfo from '../BandsInfo/BandsInfo'
import Band from '../Band/Band'
import data from '../metal.json'

function App() {

    const bands = data.map((band, i) => {

        const { band_name, fans, formed, split, origin, ID } = band

        return (
            <Band key={ID} band_name={band_name} fans={fans} formed={formed} origin={origin} split={split}></Band>
        )
    })

    return (
        <div className="App">
            <Heading></Heading>
            <BandsInfo data={data} ></BandsInfo>
            <div className="AppBody">
                <div className="BandList">
                    {bands}
                </div>
            </div>
        </div >
    );
}

export default App;
