import { faker } from '@faker-js/faker'
import express from 'express'
const router = express.Router()

// products
router.get('/', (req, res) => {
  const { quantity } = req.query
  const size = quantity || 10
  const products = []
  for (let index = 0; index < size; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url()
    })
  }
  res.json(products)
})
// params
router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id,
    name: 'product name',
    price: 666
  })
})
// create product
router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
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
  res.json({
    message: 'product partial updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'product deleted',
    id
  })
})

export { router }
