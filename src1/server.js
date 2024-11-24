const express = require("express");
const cors = require("cors");
var mysql = require("mysql2");

var app = express();

app.use(cors());
app.use(express.json());

var conn = mysql.createConnection({
    host:"localhost",
    user:"dinesh",
    password:"dinesh",
    database:"emp_details"
});

conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("connected to mysql")
});

app.get("/edetails",(req,res)=>{
    var tb = "select * from edetail";
    conn.query(tb,(err,tables)=>{
        if(err){
            console.log(err);
        }
        res.json(tables);
    });
});

app.post("/edetails",(req,res) =>{
    var newrd = req.body;
    var ins = "insert into edetail (eid,ename,age,dept,salary) values(?,?,?,?,?)";
    var values = [newrd.eid,newrd.ename,newrd.age,newrd.dept,newrd.salary];

    conn.query(ins,values,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send("successfully inserted");
    });
});

app.delete('/edetails/:id', (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM edetail WHERE eid = ?";
    
    conn.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
        } 
        res.send('Record deleted successfully');
    });
});

app.put('/edetails/:id', (req, res) => {
    const id = req.params.id;
    const { ename, age, dept, salary } = req.body;
    const query = "UPDATE edetail set ename=? ,age=?,dept=?,salary=? WHERE eid = ?";
    
    conn.query(query, [ename,age,dept,salary,id], (err, result) => {
        if (err) {
            console.error(err);
        } 
        res.send('Record updated successfully');
    });
});

app.listen(3000,()=>{
    console.log("server running on port 3000...");
});