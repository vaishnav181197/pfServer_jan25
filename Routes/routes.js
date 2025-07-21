const express=require('express')
const UserController=require('../Controllers/UserController')
const ProjectController=require('../Controllers/ProjectController')

const router=express.Router()
const jwtmiddle=require('../Middlewares/jwtMiddleware')
const multermiddle=require('../Middlewares/multerMiddlewareConfig')

//user
router.post('/login',UserController.userLogin)
router.post('/reg',UserController.userRegister)
router.put('/updateprofile',jwtmiddle,multermiddle.single("profile"),UserController.profileUpdate)

//projects
router.post('/addproject',jwtmiddle,multermiddle.single("image"),ProjectController.addProject)
router.get('/allprojects',ProjectController.allProject)
router.get('/userprojects',jwtmiddle,ProjectController.userProject)
router.get('/getproject/:id',jwtmiddle,ProjectController.getProjectWithId)
router.delete('/deleteproject/:id',jwtmiddle,ProjectController.deleteProject)
router.put('/editproject/:id',jwtmiddle,multermiddle.single("image"),ProjectController.updateProject)









module.exports=router