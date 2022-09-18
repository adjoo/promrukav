import express, {NextFunction, Request, Response} from "express";
const {secret} = require('./config')

const app = express()
const port = 5000

const cookieParser = require('cookie-parser')
const cors = require("cors");
const path = require('path');

app.use(express.json())
app.use(cookieParser(secret))
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build'));
});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = require("./routes")
router(app)

//404//
app.use(function(req: Request, res:Response, next: NextFunction) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(port)