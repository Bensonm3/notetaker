// Dependencies
let express = require('express');
let path = require('path');
let db = require('./db/db.json');
let fs = require('fs');
let util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Sets up the express App
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing to static files
app.use(express.static(path.join(__dirname, 'public')))

// Routing for Index template
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
// Routing for Notes template
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// Get API/notes will return the list of notes by pulling them from the saved json file
app.get("/api/notes", (req, res) =>{
    readFileAsync("./db/db.json", 'utf8').then((savedNotes) =>{
        JSON.parse(savedNotes);
        return res.json(savedNotes);

    })
});

app.post("/api/notes", (req, res) =>{
    var newNote = req.body
    readFileAsync("./db/db.json", 'utf8').then((savedNotes) =>{
        savedNotes = JSON.parse(savedNotes);
        savedNotes.push(newNote);
        // Appends the number of unique notes to the object
        savedNotes[savedNotes.length - 1].id=savedNotes.length-1;
        writeFileAsync("./db/db.json", JSON.stringify(savedNotes))
    })
    res.send("Notes file Appended")
})

app.delete("/api/notes/:id", (req, res) =>{
    var chosenID = req.params.id
    readFileAsync("./db/db.json", "utf8").then((data) =>{
        data = JSON.parse(data)
        data.splice(chosenID, 1)
        for(i=0; i < data.length; i++){
            data[i].id=i;
        };
        writeFileAsync("./db/db.json", JSON.stringify(data))
    })
    res.send("Note: "+chosenID+" has been cleared")
})




// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });