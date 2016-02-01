var express = require("express");
var mongoskin = require("mongoskin");
var bodyParser = require("body-parser");

var app = express();

var db = mongoskin.db("mongodb://@localhost:27017/testdatabase", {safe: true});
var id = mongoskin.helper.toObjectID;

var allowMethods = function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
};

var allowCrossTokenHeader = function (req, res, next) {
    res.headers("Access-Control-Allow-Headers", "token")
};

var auth = function (req, res, next) {
    if (req.headers.token === "password123456789") {
        return next();
    } else {
        return next(new Error("No autorizado"));
    }
};

app.param("collection", function (req, res, next, coleccion) {
    req.collection = db.collection(coleccion);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowMethods);
app.use(allowCrossTokenHeader);

//POST
app.post("/api/:coleccion", auth, function (req, res, next) {
    req.collection.insert(req.body, {}, function (e, result) {
        if (e)
            return next(e);
        res.send(result);
    });
});

//GET
app.get("/api/:coleccion", auth, function (req, res, next) {
    req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function (e, result) {
        if (e)
            return next(e);
        res.send(result);
    });
});

//GET
app.get("/api/:coleccion/:id", auth, function (req, res, next) {
    req.collection.find({_id: id(req.params.id)}, function (e, result) {
        if (e)
            return next(e);
        res.send(result);
    });
});

//PUT
app.put("/api/:coleccion/:id", auth, function (req, res, next) {
    req.collection.update({_id: id(req.params.id)}, {$set: req.body}, {safe:true, multi: false}, function (e, result) {
        if (e)
            return next(e);
        res.send((result === 1) ? {resultado: "ok"} : {resultado: "ko"});
    });
});

//DELETE
app.delete("/api/:coleccion/:id", auth, function (req, res, next) {
    req.collection.remove({_id: id(req.params.id)}, function (e, result) {
        if (e)
            return next(e);
        res.send((result === 1) ? {resultado: "ok"} : {resultado: "ko"});
    });
});

app.listen(8080, function () {
    console.log("Servidor escuchando en el puerto 8080");
});