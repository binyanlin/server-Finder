var express = require('express');
var mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 7600;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(PORT, () => console.log("listening on port " + PORT))
