import axios from "axios"

export default async function handler(req, res) {
    
    try {
        const response = await axios.get('http://localhost:5000/login')

        let data = response.data;

        res.status(200).json(data)

      } catch (error) {
        console.log(error.response)
        res.status(400).json(error)
      }
}
