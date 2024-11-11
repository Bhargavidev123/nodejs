var http=require("http");


var server =http.createServer((req,res)=>{

    console.log(req.url,"hello");
    
    if(req.url=="/bhargavi"){

        res.end("Name:bhargavi\n Branch:CSE\n Location:Warangal\n");

    }

    else{
        res.end("ending")
    }


})

var port=5001;
server.listen(port,()=>{


console.log("hi server started "+port);


})