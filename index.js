const  express=require('express')
const app = express();
require('dotenv').config()
const mongoose= require('mongoose')
const port=process.env.SERVER_PORT
console.log(port)
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())
// import model

const ProductSchema=require('./model/image')


mongoose.connect("mongodb://127.0.0.1:27017/imageSave").then(()=>{
        app.listen(port,()=>{
            console.log('server starter')
        })
})

/*post*/

app.post("/save-image", async (req,res)=>{
        const body=req.body;

    console.log(body)
       try{
            const product=  new ProductSchema({
                description:req.body.description,
                image:req.body.image
            });

         const response=  await product.save();
         return  res.status(200).json(response)
        }catch (e){
            console.log(e)
        }
})
app.get("/all-data",(req,res)=>{
    ProductSchema.find().then((data)=>{
        return  res.status(200).json(data)
    })
})