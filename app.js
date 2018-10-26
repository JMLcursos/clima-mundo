/*
la nueva URL de google maps es:
https://developers.google.com/maps/documentation/geocoding/start

API Key: AIzaSyBgHHXw3-Lx2GizRyoJCwCzKaQuikSvcGY
*/

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Obtiene latitud y longitud de una dirección
/*
lugar.getLugarLatLng(argv.direccion)
    .then(respL => {
        clima.getClima(respL.lat, respL.lng)
            .then(respC => {
                console.log(`Temperatura: ${respC.temperatura}\n Humedad: ${respC.humedad}\n Presión: ${respC.presion}\n Min: ${respC.temp_min}\n Max: ${respC.temp_max}\n`);
            })
            .catch(e => console.log(e));
    })
    .catch(error => console.log(error))
*/

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return {
            temperatura: temp.temperatura,
            presion: temp.presion,
            humedad: temp.humedad,
            temp_max: temp.temp_max,
            temp_min: temp.temp_min
        }

    } catch (e) {
        return "Se ha producido un error en el API";;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// 
// Recuperar el clima de una dirección
// openweathermap.org
//
// API Key
// 7ea7f869f42a48d86af1f60f6d233b78
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=7ea7f869f42a48d86af1f60f6d233b78
//