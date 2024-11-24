const http = require("http");

const server = http.createServer();

// server.on("connection",()=>{
//     console.log("NewConnection");
// });

depts = ['it','cse','ece'];

server.on("request",(req,res)=>{
    if(req.url === '/'){
        res.write("Hello Tech's");
        res.end();
    }

    if(req.url === '/depts'){
        res.write(JSON.stringify(depts));
        res.end();
    }

});

server.listen(3000,()=>{
    console.log("Server listening to port 3000... ");
});