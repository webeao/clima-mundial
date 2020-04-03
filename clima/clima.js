const axios = require('axios');

const lugar = require('../lugar/lugar');



const getClima = async (lat, lon)=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f3ab285eb4a15866a547c6069f09ff6`);
    
return resp.data.main.temp;


     }



  

     module.exports ={
         getClima
     }




