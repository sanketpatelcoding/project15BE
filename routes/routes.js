const express =require('express');
const router =express.Router();
const users = require("../models/userModel");


router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).json({ result:"Check  all inpt field has proper data."});
    }

    try {
        
        const checkUser = await users.findOne({email:email});
        console.log(checkUser);

        if(checkUser){
            res.status(404).json({ result:"this is user is already present"});
        }else{
            const addNewUser = new users({
                name,email,age,mobile,work,add,desc
            });

            await addNewUser.save();
            res.status(201).json(addNewUser);
            console.log(addNewUser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

//method for getting data on home page

router.get('/getData',async (req,res)=>{
    try {
        const userData =await users.find();
        res.status(201).json(userData);
        console.log(userData)
    } catch (error) {
        res.status(422).json(error);
    }
}
);

//method to get single user


router.get('/oneUserData/:id',async (req,res)=>{
   try {
    console.log(req.params);
    const {id}=req.params;
    const singleUser = await users.findById({_id:id});
    console.log(singleUser);
    res.status(201).json(singleUser);
   } catch (error) {
    res.status(404).json(error);
   }
}
);

// Patch Method to update the existinguser through edit.js

router.patch("/updateOldUser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatedUser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updatedUser);
        res.status(201).json(updatedUser);

    } catch (error) {
        res.status(422).json(error);
    }
})


//Delete api  to delte the data
router.delete("/deleteUserById/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteUser = await users.findByIdAndDelete({_id:id})
        console.log(deleteUser);
        res.status(201).json(deleteUser);

    } catch (error) {
        res.status(422).json(error);
        //console.log(error)
    }
})


module.exports=router;

