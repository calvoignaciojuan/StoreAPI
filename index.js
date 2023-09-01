import express from 'express'
import { routerApp } from './routes/index.js'

const app = express()
const port = 3000

// para aceptar json hay que agregar middleware
app.use(express.json())

// ruta raiz
app.get('/', (req, res) => {
  res.send('Hello from sever')
})

routerApp(app)
// listen server port
app.listen(port, () => {
  console.log('servidor corriento en ' + port)
})
