import express from 'express'
const router = express.Router()

// query params - ruta ejemplo localhost:3000/users?offset=10&limit=7
router.get('/', (req, res) => {
  const { offset, limit } = req.query
  if (offset && limit) {
    res.json({
      offset,
      limit
    })
  } else {
    res.send('No hay parametros')
  }
})

export { router }
