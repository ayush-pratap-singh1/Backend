import express from 'express';
import userRoute from './Router/userRoute.js';


const port=3000;


const app=express();

app.use("/api",userRoute);

app.listen(port,()=>{
    console.log("Server is running on port ${port}");
})
