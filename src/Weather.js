import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`);
    }
    let apiKey = "3a5b83d2290ca8aeea736a82a10e7ea7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unit=metrics`
    
    axios.get(apiUrl).then(handleResponse);

    return (
        <Loader
        type="Puff"
        color="yellow"
        height={100}
        width={100}
        timeout={3000}
      />
    );
}