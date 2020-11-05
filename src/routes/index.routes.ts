import {Request,Response,Router} from 'express';


const Route = Router();


Route.get('/',(req: Request,res: Response) => {
    return res.status(200).json({ hello: 'word'})
})

export default Route;