require('express-async-errors');
const express=require('express')
const app=express();
require('dotenv').config()
//Routes
const auth=require('./Routes/Auth/auth')
const user=require('./Routes/User/UserManip')
const Prayer=require('./Routes/Prayer/Prayer')

//middlewares
const errorhandler=require('./middleware/error-handler')
const notfound=require('./middleware/not-found')
const authermticationMiddleware=require('./middleware/authentication')
//packages
const connectDB=require('./db/connect')
const cors=require('cors')
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit=require('express-rate-limit')


//using packages
//app.use(rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 1000 ,
//     standardHeaders: 'draft-7',
//     legacyHeaders: false,
//   }));
  
app.use(express.json());
app.use(helmet())
app.use(xss())
app.use(cors())



app.use('/api/v1',auth)
app.use('/api/v1/user/',authermticationMiddleware,user)
app.use('/api/v1/Prayer/',Prayer)





//custom middlewares

app.use(notfound)
app.use(errorhandler)


const port=3002 || process.env.PORT;

const start=async ()=>{
    try {
        await connectDB() 
        app.listen(port,()=>{
            console.log('server running on port ..... ',port) 
        }) 

    } catch (error) {
        console.log(error)
    }
}
start()