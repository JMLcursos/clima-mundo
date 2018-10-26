//
//

const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    // const getLugarLatLng = (direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyBgHHXw3-Lx2GizRyoJCwCzKaQuikSvcGY`)
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let cors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}
module.exports = {
    getLugarLatLng
}