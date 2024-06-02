import axios from "axios"; 
const main_Url =axios.create({
    baseURL:'https://dummyjson.com/'
})
export default main_Url;