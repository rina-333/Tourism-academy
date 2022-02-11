import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tourism-edu.herokuapp.com'
})

export default instance
