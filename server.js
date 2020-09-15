const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); //No necesito crear una variable porque al importarlo ya se ejecuta el código, que es lo único que necesito para registrar los helpers

//Al desplegar la aplicación en HEROKU no sabremos
//el puerto en el que estará corriendo, pero sí que lo podremos
//obtener con process.env.PORT, que no tendrá valor cuando estemos en local
//por lo que en ese caso, seguiremos usando el 3000 como hasta ahora
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//Indicamos a expres que use el motor de visualización de HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Iskander',
    //     edad: 36,
    //     url: req.url
    // }
    // res.send(salida);

    // res.render('home', {
    //     nombre: 'Iskander',
    //     anio: new Date().getFullYear()
    // }); //Entiendo que, por defecto, busca en la carpeta "views"

    res.render('home', {
        nombre: 'iskander el grande'
    });
})

app.get('/about', (req, res) => {
    // res.render('about', {
    //     anio: new Date().getFullYear()
    // });
    //No necesitamos pasar el anio si usamos el helper "getAnio" que hemos definido anteriormente
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});