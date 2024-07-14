import Express from 'express'
import cors from 'cors'
import { logServer } from './middleware/logServer.js'
import { joyas, error } from './router/index.js'

const app = Express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(Express.json())

app.disable('x-powered-by')

app.use(logServer)

//  Ver la ruta router/r.joyas.js
app.use('/joyas', joyas)
//  Ver la ruta router/r.error.js
app.use('*', error)

app.listen(PORT, () => console.log(`Informacion de la API:\nRuta: http://localhost:${PORT}/joyas`))
