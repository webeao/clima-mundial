const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const getInfo = async (direccion) => {

    try {

        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    }
    catch (e) {

        return console.log(`no se pudo determina el clima de ${direccion}`);
    }

}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)
    

module.exports = {
    argv,
    getInfo
}


/*

lugar.getLugarLatLon(argv.direccion)
.then(data=>(console.log(data)));

clima.getClima(5.330000,-75.790001)
.then(console.log);
*/
