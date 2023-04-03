import axios from 'axios'
import { geolocated } from 'react-geolocated'


const GetCurrentCountry = async ({ isGeolocationAvailable, isGeolocationEnabled, position }) => {

  if (!isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation</div>
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled</div>
  }

  if (!position) {
    return <div>Getting location data...</div>
  }

  const { latitude, longitude } = position.coords

  // Call a reverse geocoding API to get the current country from the latitude and longitude.
  // For example, you can use the Geocoding API from OpenStreetMap or Google Maps.

  const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
  
  const currentCountry = response.data.countryName

  return (<div>Your current country is: {currentCountry}</div>)

}

export default geolocated()(GetCurrentCountry);
