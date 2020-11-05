import express,{Application,IRoute} from 'express'
interface Servidor {
    port: number,
    routes?: Array<IRoute> | any
}

class Server {
    private porta: number
    private app: Application
    constructor({port,routes}: Servidor){
        this.porta = port;
        this.app = express();
        this.rotas(routes)
    }
    private rotas(route : Array<IRoute>){
        route.map((v: any) => {
            this.app.use(v)
        })
    } 
    public run(): void {
        this.app.listen(this.porta,() => console.log("Server started"))
    }
}

export default Server;