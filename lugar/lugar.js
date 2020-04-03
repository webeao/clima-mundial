const app = require('../app');


const axios = require('axios');

const getLugarLatLon = async (dir) => {
    

    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '8052797762msh52f04595aeaea3ap1857d7jsncbb180c22722'}
      });
    
     const resp = await instance.get();

     if ( resp.data.Results.lenght === 0){
        throw new Error (`No hay resultados para ${direccion}`);
     }

     const data = resp.data.Results[0];
     const direccion = data.name;
     const lat = data.lat;
     const lon = data.lon

 
    
     
return{
    direccion,
    lat,
    lon
}
}



module.exports={
    getLugarLatLon
}

