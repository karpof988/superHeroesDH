const express = require('express');
const app = express();
const fs = require('fs');
const objHeroes = JSON.parse(fs.readFileSync('./data/heroes.json'),'utf-8');


// Link documentacion:
// https://docs.google.com/document/d/1mqyCjF964ijVk5BJdAj1cWcd7xQAfjkDBL0nY3Aufbw/edit
app.get("/",(req,res)=>{
    res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivo. Recuerda: Nunca pares de creer en ti");
});

app.get("/heroes", (req,res)=>{
 res.send(JSON.stringify(objHeroes,null,' '));
});

app.get("/heroes/:id", (req,res)=>{
    let theHeroe = objHeroes.find(heroe => heroe.id == req.params.id);
    if(theHeroe){
        res.send("Mi Nombre es "+ theHeroe.nombre +" y soy " +theHeroe.profesion);
    }else{
        res.send("Heroe inexistente");
    }
});

app.get("/heroes/bio/:id/:ok?", (req,res)=>{
    let theHeroe = objHeroes.find(heroe => heroe.id == req.params.id);
    if(theHeroe){
        if(req.params.ok === undefined){
            res.send("Mi Nombre es "+ theHeroe.nombre +" lamento que no desees saber mas de mi");
        }else{
            res.send("Mi Nombre es "+ theHeroe.nombre +" \nReseña:" + theHeroe.resenia);
        }
    }else{
        res.send("No encontramos un Heroe para mostrarle su biografia");
    }
});
   
app.get("/creditos", (req,res)=>{
    res.send("Creditos: Emma, Noel, Carlos, Nico");
});

app.listen(3032,'localhost', () =>{
    console.log("Server corriendo");
});

///app.get()

//module.exports = app;
