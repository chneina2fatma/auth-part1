const express=require("express");
const router=express.Router();
const User=require("../models/User");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {loginRules,registerRules,validation}=require("../middleware/Validator");


// router.get("/",(req,res)=>{
//     res.send("hello world");
// });



// save
router.post("/register",registerRules(),validation, async(req,res)=>{
    const {name,lastname,email,password}=req.body;
    try {
const newUser=new User({name,lastname,email,password})

// check if the email exist
const searchedUser =await user.findOne({email});
if (searchedUser){
    return res.send(("msg:user already exist"));
}

// hash password
const salt=10;
const genSalt = await bcrypt.genSalt(salt);
const hashedPassword = await bcrypt.hash(password,genSalt);
console.log(hashedPassword);
newUser.password=hashedPassword;



// generate the token
await newUserToken.save();
const payload={
    _id:newUserToken._id,
    name:newUserToken.name,
};

const token=await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:3600,});




      // save user
      await newUser.save();
    res.status(200).send({newUser,msg:"user is saved",token:`bearer ${token}`});
    } 
    catch (error) {
        res.status(500).send("can not save user")
    }
});

// login

router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try {


    // find if the user exist
    const searchedUser=await User.findOne({email});
    // if the email not exist
    if(!searchedUser){
        return res.send({msg:"bad credential"})
    }

    // password are equal
    const match=bcrypt.compare(password,searchedUser.password);
    
    
    if(!match){
        return res.status(400).send({msg:"bad credential"});
    }

    // cree un token
const payload={
    _id:searchedUser._id,
};
const token=await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:3600,});
    // send the user
    res.status(200).send({user:searchedUser , msg:"success",token:`bearer ${token}`});

} catch (error) {
    
    res.status(500).send({ msg:"can not get the user"});

}