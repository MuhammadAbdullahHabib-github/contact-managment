const express = require('express');
const  connectDB = require("./config/db");
const app = express();
const PORT = 5000;

//connecting mongodb
connectDB();

// inatiliza middle ware

app.use(express.json({extended:false}))

app.get('/', (req , res) => {res.json({"message":"Hello Abdullah"})});

//defining routes

app.use("/api/users" , require("./routes/user"));
app.use("/api/contacts" , require("./routes/contacts"));
app.use("/api/auth" , require("./routes/auth"));


app.listen(PORT, ()=>{console.log(`Server started at Port ${PORT} ok`)});