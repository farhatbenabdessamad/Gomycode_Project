const express=require("express")
const { register, login, getcurrent, updateUser } = require("../controller/user_controller")
const { registerValidation, validation, loginValidation } = require("../middelware/validation")
const { isauth } = require("../middelware/isauth")
const userRouter=express.Router()
userRouter.post("/register",registerValidation,validation,register)
userRouter.post("/login",loginValidation,validation,login)
userRouter.get("/current",isauth,getcurrent)
userRouter.put("/update/:id", updateUser)
module.exports=userRouter