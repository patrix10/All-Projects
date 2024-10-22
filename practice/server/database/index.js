import Connection from "./database/db.js";
import routes from './routes/route.js'

const app = express()
app.use('/',routes)

app.use(express.json())

const PORT = 8000

Connection()

app.listen()