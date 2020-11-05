import Server from "./core";
import IndexRoute from './routes/index.routes'


new Server({
     port: Number(process.env.PORT || 3333),
     routes: [IndexRoute]
}).run();
