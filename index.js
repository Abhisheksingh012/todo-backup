const express = require("express");
const todoRoutes= require('./src/routers/todoRoutes');
const countRoutes= require('./src/routers/count');
require('dotenv').config();
const app = express();
var cors = require("cors");
const mongooseConnection = require("./src/helpers/mongoose-connection");
app.use(express.json());
app.use(cors());


app.use('/todos', todoRoutes);
/*
for countAPI there were multiple way to implement this for diffrent requirment
1.we can take a local count variable and update it by middleware amd it would be most fast
    by other ways but it would be not presistent as it would be destroyed if server get crashed
2. we can use inmemory cache as redis and it would be faster than database and presitent way to store the
data
3. for less complexity i have used a database to store count 
*/

app.use('/count', countRoutes);


mongooseConnection();
app.listen(5000, (req, res)=>{
console.log("Server is listening on port 5000");
})