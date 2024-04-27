const http = require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");

const PORT=1160;

const getEmployeeDetails = async (client) => {
    const cursor = client.db("EmployeeDB").collection("EmployeeDetails").find({});
    const results = cursor.toArray();
    return results;
}

http.createServer(async (req,res)=>{
    console.log(req.url);
    if(req.url==="/api"){
        const URL = "mongodb+srv://cpodi1:Gcw123%40Gnt@employeecluster.ecobgud.mongodb.net/?retryWrites=true&w=majority&appName=EmployeeCluster";
        const client = new MongoClient(URL);
        try{
            await client.connect();
            console.log("Database connected successfully");
            const employeeData = await getEmployeeDetails(client);
            console.log(JSON.stringify(employeeData));
            res.setHeader("Access-Control-Allow-Origin","*");
            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(employeeData));
        }
        catch(err){
            console.log("Error in connecting database",err);
        }
        finally{
            await client.close();
            console.log("Database is closed");
        }
    }
    else{
        let mediaType = "";
        const filePath = path.join(__dirname,"public",req.url==="/"?"index.html":req.url.slice(1));
        if(filePath.endsWith(".png")) mediaType = "image/png";
        else if(filePath.endsWith(".jpg") ||filePath.endsWith(".jpeg") ) mediaType = "image/jpeg";
        else mediaType = "text/html";
        fs.readFile(filePath,(err,content)=>{
            if(err){
                if(err.code === "ENOENT"){
                    res.writeHead(404,{"content-type":"text/html"});
                    res.end("<h1>404 Page not found!</h1>");
                }
                else{
                    res.writeHead(500,{"content-type":"text/plain"});
                    res.end("File can't be opened/read");
                }
            }
            else{
                    res.writeHead(200,{"content-type":mediaType});
                    res.end(content);
                }
        })
    }
}).listen(PORT,()=>console.log(`Server is running on ${PORT}`))