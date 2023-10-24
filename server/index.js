const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Users')
const EmployeeModel=require('./models/Employee')

const app=express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE)

app.get('/users',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body).then(users=>res.json(users))
    .catch((err)=>res.json(err))
})

app.post("/",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {name,password}=req.body
    EmployeeModel.findOne({name:name})
    .then(user=>{
        if(user)
        {
            if(user.password==password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect")
            }
        }
        else
        {
            res.json("No record exist")
        }
    })
})


app.listen(3001,()=>{
    console.log("Server is running")
})