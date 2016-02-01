var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articles'
});
connection.connect();

var article = {
    author: 'shackox',
    title: 'Insert from node js',
    body: 'foo bar'
};

var query = connection.query('insert into articles set ?', article, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});