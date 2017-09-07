var express = require("express");
var mysql = require('mysql');
var bodyParser = require("body-parser");
var fs = require("fs");
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/views"));

app.get("/comments", function(request, response){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '0707',
        database : 'mysql'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

    // Getting data from database
    connection.query("SELECT * FROM Comments", function(err, rows, fields){
        if(err) return console.log(err);
        // console.log(rows);
        // console.log(fields);
        response.send(rows);
    });

    connection.end();
});

app.post("/", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);

    console.log(request.body.files);
    console.log(request.body);

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '0707',
        database : 'mysql'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

    connection.query(`INSERT INTO Comments (parent_comment_id, nesting, name, email, date, url, text, ip, browser) 
                        VALUES ('${request.body.parentCommentId}',
                        '${request.body.nesting}',
                        '${request.body.name}', 
                        '${request.body.email}', 
                        '${request.body.date}', 
                        '${request.body.url}', 
                        '${request.body.text}', 
                        '${request.headers['x-forwarded-for'] || 
                           request.connection.remoteAddress ||
                           request.socket.remoteAddress}', 
                        '${request.headers['user-agent']}')`,
        function(err, rows, fields){
            if(err) return console.log(err);
            // console.log(rows);
            // console.log(fields);
    });

    // Getting data from database
    connection.query("SELECT * FROM Comments", function(err, rows, fields){
            if(err) return console.log(err);
                // console.log(rows);
                // console.log(fields);
        });

    connection.end();
    response.json(`${request.body.name}`);
});

app.post("/api/upload", multipartyMiddleware, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    // console.log(request.files.file);
    // console.log(request.files);
    // console.log(request.files.file[0].path);
    // console.log(request.files.file[0].name);


    fs.readFile(`${request.files.file[0].path}`, function (err, data) {
        var filePath = __dirname + "\\media\\images\\" + request.files.file[0].name;

        fs.writeFile(`${filePath}`, data, function (err) {
            if (err) {
                return console.warn(err);
            }
            console.log("The file: " + request.files.file[0].name + " was saved to " + filePath);
        });
    });

    // var writeableStream = fs.createWriteStream("some.jpg");
    //
    // console.log(request.files);
    // console.log(request.file);
    //
    // fs.writeFile("image.jpg", '');


    response.send(request.body);
});

app.listen(9000, 'localhost');