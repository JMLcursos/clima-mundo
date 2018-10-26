// 
// Recuperar el clima de una dirección
// openweathermap.org
//
// API Key
// 7ea7f869f42a48d86af1f60f6d233b78
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=7ea7f869f42a48d86af1f60f6d233b78
//
const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&units=metric&appid=7ea7f869f42a48d86af1f60f6d233b78`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la latitud ${latitud} y longitud ${latitud}`);
    }

    return {
        temperatura: resp.data.main.temp,
        presion: resp.data.main.pressure,
        humedad: resp.data.main.humidity,
        temp_max: resp.data.main.temp_max,
        temp_min: resp.data.main.temp_min
    }

}

module.exports = {
    getClima
}