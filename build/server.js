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

app.get("/media/images/*", function (request, response) {
    // console.log(`Запрошенный адрес: ${request.url}`);
    var decodedUrl = decodeURI(request.url);
    var filePath = __dirname + decodedUrl;
    // console.log(filePath);
    fs.readFile(`${filePath}`, function(error, data){
        // console.log(data);
        if(error){

            response.statusCode = 404;
            response.end("Ресурс не найден!");
        }
        else{
            // response.setHeader("Content-Type", "image/jpg");
            response.end(data);
        }

    });
});
// app.get("/file", function (request, response) {
//
//     var file = new fs.ReadStream(`${request.query.filePath}`);
//     response.setHeader("Content-Type", "image/jpg");
//     // response.setHeader("X-Content-Type-Options", "nosniff");
//     file.pipe(response);
//
//     file.on('error', function(err){
//         response.statusCode = 500;
//         response.send("Server Error");
//         console.error(err);
//     });
//
//     response.on('close', function(){
//         console.log("File destroyed");
//         file.destroy();
//     });
// });

app.post("/", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);

    // console.log(request.body.files);
    // console.log(request.body);

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

    console.log(request.body.filesPaths);
    var filesPaths = JSON.stringify(request.body.filesPaths);
    // var filesPaths = request.body.filesPaths.join(",");
    console.log(filesPaths);

    connection.query(`INSERT INTO Comments (parent_comment_id, nesting, name, email, date, url, text, ip, browser, files_paths) 
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
                        '${request.headers['user-agent']}',
                        '${filesPaths}')`,
        function(err, rows, fields){
            if(err) return console.log(err);
            // console.log(rows);
            // console.log(fields);
    });

    // Getting data from database
    connection.query("SELECT * FROM Comments", function(err, rows, fields){
            if(err) return console.log(err);
                console.log(rows);
                // console.log(fields);
        });

    connection.end();
    response.json(`${request.body.name}`);
});

app.post("/api/upload", multipartyMiddleware, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    var savedFilesPath;

    if (request.files.file.length === undefined) {
        fs.readFile(`${request.files.file.path}`, function (err, data) {
            var filePath = __dirname + "\\media\\images\\" + request.files.file.name;

            fs.writeFile(`${filePath}`, data, function (err) {
                if (err) {
                    return console.warn(err);
                }
                console.log("The file: " + request.files.file.name + " was saved to " + filePath);
                savedFilesPath = "media/images/" + request.files.file.name;
                respSend();
            });
        });
    }

    else if (request.files.file.length > 0) {
        for (var i = 0; i < request.files.file.length; i++) {
            var sendResponse = false;
            if (i === request.files.file.length-1) sendResponse = true;
            writeFile(i, sendResponse);

            function writeFile(i, sendResponse) {
                setTimeout(function () {
                    fs.readFile(`${request.files.file[i].path}`, function (err, data) {
                        var filePath = __dirname + "\\media\\images\\" + request.files.file[i].name;

                        fs.writeFile(`${filePath}`, data, function (err) {
                            if (err) {
                                return console.warn(err);
                            }
                            console.log("The file: " + request.files.file[i].name + " was saved to " + filePath);
                            savedFilesPath.push(filePath);
                            if (sendResponse) respSend();
                        });
                    });
                }, 500);
            }
        }
    }

    function respSend() {
        response.send(savedFilesPath);
    }
});

app.listen(9000, 'localhost');