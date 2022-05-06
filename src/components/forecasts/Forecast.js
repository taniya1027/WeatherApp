import React, {useState} from 'react';
import Conditions from '../conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    const [responseObj, setResponseObj] = useState({});
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const uriEncodedCity = encodeURIComponent(city);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    function getForecast(e){
        e.preventDefault();

        if(city.length === 0){
            return setError(true);
        }

        setError(false);
        setResponseObj({});

        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		        'X-RapidAPI-Key': 'bd1383597emsh399cef5fbb41194p1cabf2jsnc5d6ed5553b3'
	        }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, options)
	    .then(response => response.json())
	    .then(response => {

            if(response.cod !== 200){
                throw new Error();
            }
            setResponseObj(response);
            setLoading(false);
        
        })
	    .catch(err => {
            setError(true);
            setLoading(false);
            
            console.error(err);
        });

    }

    return (<div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               
           </div>

           <form onSubmit = {getForecast}>
               <input className={classes.TextInput} type = "text" placeholder = "Enter city" value = {city} onChange = {(e) => setCity(e.target.value)}/>
               <label className= {classes.Radio}>
                   <input type = "radio" name = "units" checked = {unit === "imperial"} value = "imperial" onChange = {(e) => setUnit(e.target.value)}/>
                   Fahrenheit
                </label>
                <label className = {classes.Radio}>
                    <input type = "radio" name = "units" checked = {unit === "metric"} value = "metric" onChange = {(e) => setUnit(e.target.value)} />
                    Celsius
                </label>
                <button className = {classes.Button} type = "submit" > Get Forecast</button>
           </form>
           <Conditions responseObj = {responseObj}  error = {error} loading = {loading}/>
       </div>)
}

export default Forecast;