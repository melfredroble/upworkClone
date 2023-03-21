import axios from 'axios'

export async function getCountriesData() {
    const response = await axios.get('https://restcountries.com/v2/all');
    const countriesData = response.data;
    return countriesData;
}