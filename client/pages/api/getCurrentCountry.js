import axios from 'axios'


export async function getCurrentCountry() {

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
      Navigator
    });
    
    const { latitude, longitude } = position.coords;
    const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    
    const currentCountry = response.data.countryName;

    return currentCountry;

}