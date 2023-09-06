import express from 'express'
import { ProductsService } from '../services/products.js'
const router = express.Router()
const service = new ProductsService()

// products
router.get('/', (req, res) => {
  res.json(service.find())
})
// params
router.get('/:id', (req, res) => {
  const { id } = req.params 
  const product = service.findOne(id)
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({
      message: 'not found'
    })
  }
})
// create product
router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json(service.create(body))
})

router.put('/:id', (req, res) => {
  const body = req.body
  const { id } = req.params
  res.json({
    message: 'product updated',
    data: body,
    id
  })
})

router.patch('/:id', (req, res) => {
  const body = req.body
  const { id } = req.params
  try {
    service.update(id, body)
    res.status(202).json({
      message: 'product partial updated',
      data: service.update(id, body)
    })
  } catch (e) {
    res.status(404).json({
      message: 'not found'
    })
    console.log(e.message)
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    res.json({
      message: 'product deleted',
      data: service.delete(id)
    })
  } catch (e) {
    res.status(404).json({
      message: 'not found'
    })
    console.log(e.message)
  }
})

export { router }
