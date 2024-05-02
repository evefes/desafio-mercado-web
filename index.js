//importar express y handlebars
const express = require('express')
const exphbs = require('express-handlebars')

// crear instancia de express
const app = express()

// escucha puerto 3000
app.listen (3000,() => {
    console.log("El servidor esta iniciado en el puerto 3000")
})

//definir motor de vistas
app.set ("view engine", "handlebars")

// configurar al motor de vistas
app.engine (
    "handlebars",
    exphbs.engine()
)

// midleware para dejar ruta estatica que se ligue a bootstrap
//node_modules/bootstrap/dist
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"))
app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"))    
app.use("/assets", express.static(__dirname + "/assets"))

// definir rutas
app.get("/", function (req, res) {
    res.render("home",{
        productos:["banana","cebollas","lechuga","papas","pimenton","tomate"]
    });
})