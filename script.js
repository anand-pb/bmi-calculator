const express = require("express")

const bodyParser = require("body-parser")
const { response } = require("express")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))



app.get("/", function(request,response){
    //response.send("Simple Arithmetic Calculator.")
    response.sendFile(__dirname + "/index.html")
    //response.send(process.argv)
})

//app.get("/calculator", function(request, response){
//    response.sendFile(__dirname + "/index.html")
//})

app.post("/", function(request, response){
    var x = Number(request.body.numberOne) 
    var y = Number(request.body.numberTwo)
    response.send("result " + (x + y))
})

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(request, response){
    var w = Number(request.body.weight)
    var h = Number(request.body.height)
    var n = (w/Math.pow(h, 2)).toFixed(2)
    response.send("Your BMI is " + n) 
})

app.listen(3000, function(){
    console.log("server available at port 3000")
})