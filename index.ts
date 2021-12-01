// @ts-ignore
import express, { Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
// @ts-ignore
import cors from 'cors'

const userRouter = require('./routes/userRoutes')
const app = express()


app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(cors());

const prisma = new PrismaClient()

app.get('/', async (req: Request,res: Response) => {
    
})

app.post('/', async ( req, res) =>  {

})

app.use('/api/users', userRouter)


app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001")
})



