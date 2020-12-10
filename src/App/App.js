import './App.css';
import Heading from '../Heading/Heading'
import Band from '../Band/Band'
import data from '../metal.json'
import React, { useState, useEffect } from 'react'

function App() {

    let [searchQuery, changeSearchQuery] = useState("")

    const bands = data.filter((band) => {

        // Find items with band names that match the query
        const inBandName = band.band_name.toLowerCase().includes(searchQuery.toLowerCase())

        // Find items with style that matches the query
        const inStyle = band.style.toLowerCase().includes(searchQuery.toLowerCase())

        return inBandName || inStyle
    }).map((band, i) => {

        const { band_name, fans, formed, split, origin, ID, style } = band

        return (
            <Band key={ID} band_name={band_name} fans={fans} formed={formed} origin={origin} split={split} style={style}></Band>
        )
    })

    let [metalFans, changeMetalFans] = useState("")

    useEffect(() => {
        let fan_count = 0
        for (let i = 0; i < data.length; i++) {
            fan_count += data[i].fans
        }
        changeMetalFans((fan_count * 1000).toLocaleString('en'))
    }, []);

    return (
        <div className="App">
            <Heading></Heading>
            <div className="BandsInfo">
                <div>
                    <h1>{data.length} Metal Bands 🤘</h1>
                    <h1>{metalFans} Metal Fans</h1>
                </div>
                <div className="bandSearch">
                    <h1>Search:</h1>
                    <div>
                        <input type="text" onChange={(e) => changeSearchQuery(searchQuery = e.target.value)} value={searchQuery} />
                    </div>
                </div>
            </div>
            <div className="AppBody">
                <div className="BandList">
                    {bands}
                </div>
            </div>
        </div >
    );
}

export default App;
