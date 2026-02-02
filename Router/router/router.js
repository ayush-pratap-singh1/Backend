import express from ' express';

const router=express.Router();

router.get('/login',(req,res)=>{
    res.send("Login Route");
});



router.get('./login/register',(req,res)=>{
    res.send("Route for Registration");
});

export default router;