
const express = require("express");

const hostname = '127.0.0.1';
const port = 3000;

const app = express();


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(express.urlencoded({extended: true}));

app.get("",(req,res)=>{
    res.send("Hello World")
});


app.get('/foo', (req, res) => {
    res.send('Hello Malo');
});
  

