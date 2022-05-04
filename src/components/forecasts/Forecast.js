import React, {useState} from 'react';
import Conditions from '../conditions/Conditions';

const Forecast = () => {
    const [responseObj, setResponseObj] = useState({});
    function getForecast(){
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		        'X-RapidAPI-Key': 'bd1383597emsh399cef5fbb41194p1cabf2jsnc5d6ed5553b3'
	        }
        };

        fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Delhi', options)
	    .then(response => response.json())
	    .then(response => setResponseObj(response))
	    .catch(err => console.error(err));

    }

    return (<div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions responseObj = {responseObj} />
       </div>)
}

export default Forecast;