import axios from "axios"

export default async function handler(req, res) {

    let url = "http://localhost:5000/user/"

    const result = await axios.get(url)

    res.status(200).json(result)
  }
  