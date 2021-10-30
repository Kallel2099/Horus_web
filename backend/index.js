const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'knowledge1406%',
    database: 'horusdb',
    port: 3306,
});

//database connection check
db.connect(err => {
    if (err) {console.log(err, 'errdb');}
    console.log('Database connected...');
});

//get all data
app.get('/usuarios', (req, res) => {
    let qr = 'SELECT * FROM usuarios';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });
});

//get single data
app.get('/usuarios/:Login', (req, res) => {
    let gOne = req.params.Login;
    let qr = 'SELECT * FROM usuarios WHERE Login = ' + '"' + gOne + '"';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        else if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        }
        else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

//create data
app.post('/usuarios', (req, res) => {
    let matricula = req.body.matricula;
    let login = req.body.login;
    let nivel = req.body.nivel;
    let nome = req.body.nome;
    let senha = req.body.senha;
    let qr = 'INSERT INTO usuarios (Matricula, Login, Nivel, Nome, Senha)'+
    ' VALUES ('+matricula+', '+'"'+login+'"'+', '+'"'+nivel+'"'+', '+'"'+nome+'"'+', '+'"'+senha+'"'+')';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'data inserted'
        });
    });
});

//update single data
app.put('/usuarios/:Matricula', (req, res) => {
    let gOne = req.params.Matricula;
    let login = req.body.login;
    let nivel = req.body.nivel;
    let nome = req.body.nome;
    let senha = req.body.senha;
    let qr = 'UPDATE usuarios SET Login = '+'"'+login+'"'+', Nivel = '+'"'+nivel+'"'+', Nome = '+'"'+nome+'"'+', Senha = '+'"'+senha+'"'+' WHERE Matricula = '+gOne;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'data updated'
        });
    });
});

//delete single data
app.delete('/usuarios/:Matricula', (req, res) => {
    let gOne = req.params.Matricula;
    let qr = 'DELETE FROM usuarios WHERE Matricula = '+gOne;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'data deleted'
        });
    });
});

//get login 
/*app.get('/usuarios/:Login', (req, res) => {
    let gOne = req.params.Login;
    let qr = 'SELECT * FROM usuarios WHERE Login = ' + gOne;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'get login',
                data: result
            });
        }
        else {
            res.send({
                message: 'data not found'
            });
        }
    });
});*/

app.listen(3000, () => {
    console.log('Server running...');
});