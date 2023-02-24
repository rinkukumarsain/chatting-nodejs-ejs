const express = require('express');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
var cookieParser = require('cookie-parser')

const { socket: { socketFun }} = require('./soket')
require('dotenv').config();

const app = express();
app.use(cookieParser())
require('../src/datasources');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const staticpath = path.join(__dirname, "/public ")
app.use(express.static(staticpath))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true, }))
app.use(express.json())
require('./api/route')(app);

const port = process.env.SECRET_PORT;


const server = app.listen(port, () => {
    console.log(`server is running ${port}`)
})
socketFun(server);

