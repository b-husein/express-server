// an app that receives user input 
// and evaluates if it's correct or not

let express = require("express");
let myApp = express();
myApp.use(express.urlencoded({extended: false}))
// myApp.get(homepage url, function that express is going to run every time
// when someone sends a request)
myApp.get("/", function(req, res){
    res.send(`
        <form action="/answer" method="POST">
            <p>The color of your eyes?</p>
            <input name="eyeColor" autocomplete="off">
            <button>Submit</button>
        </form>
    `)
})

// what app should do if it receives POST request
myApp.post("/answer", function(req, res){
    if (req.body.eyeColor.toUpperCase() == "BROWN") {
        res.send(`
            <p>That's right.</p>
            <a href="/">Go back.</a>
        `)
    } else {
        res.send(`
            <p>That's not right, try again.</p>
            <a href="/">Go back.</a>
        `)
    }
})

// what app should do if it receives POST request
myApp.get("/answer", function(req, res){
    res.send("Are you lost, there is nothing to see here.")
})

// instruct server to begin listening for incoming requests;
myApp.listen(3000);