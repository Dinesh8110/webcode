var mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "dinesh", 
    password: "dinesh",
    database: "emp_details"
});

con.connect((err) => {
    if (err) {
        console.log(err);
    }
    var tb = "select * from edetail";
    con.query(tb, (err, tables) => { 
        if (err) {
            throw err;
        }
        console.log(tables);
    });
});















// var mysql = require("mysql");

// var con = mysql.createConnection({
//     host:"localhost",
//     name:"root",
//     password:"root",
//     database:"votes"
// });

// con.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     var tb= "show tables";
//     con.query(tb,(err,tables)=>{
//         if(err) {
//             throw err;
//         }
//         console.log(tables);
//     });
// });