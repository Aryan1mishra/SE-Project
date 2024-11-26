const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const multer=require("multer")
const path=require("path")
const projectModel=require('./models/project')
const usermodel= require('./models/user')

const app=express()
var http=require('http').createServer(app);
var {Server}=require('socket.io');
var io=new Server(http,{});
app.use(express.json())

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const uplode =multer({
    storage:storage
})
app.use(cors())
mongoose.connect("mongodb://localhost:27017/se_project")


app.post('/uplode',uplode.single('file'),(req,res)=>{
    usermodel.create({image:req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.get('/getImage',(req,res)=>{
    usermodel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const{ email,password}=req.body;
    projectModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Login successfully")
            }
            else{
                res.json("password incorect")
            }
        }
        else{
            res.json("Sign up first")
        }
    })
})

app.post('/sign',(req,res)=>{
    projectModel.create(req.body)
    .then(project=>res.json(project))
    .catch(err=>res.json(err))
})
app.get('/', (req, res) => {
    res.send('Socket.IO Server Running');
  });
  
  // Socket.IO logic
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    // Listen for a new post
    socket.on('new-post', (post) => {
      // Broadcast the new post to all connected clients
      io.emit('broadcast-post', post);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
  

http.listen(3001,()=>{
    console.log("server is running")
})
