const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
require("./db/conn");
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(require("./router/auth"));

if(process.env.NODE_ENV==="production")
{
  app.use(express.static("client/dist"));
  const path = require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
  })
}


app.listen(PORT, () => {
  console.log(`Listening to port no. ${PORT}`);
});
