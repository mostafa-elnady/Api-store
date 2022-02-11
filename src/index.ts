import express , {Application , Request,Response} from 'express'

const app:Application = express()




app.get('/',(req:Request, res:Response)=>{
    res.json({
        message:"hello , you are welcome"
    })
})


const port = 3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})


export default app