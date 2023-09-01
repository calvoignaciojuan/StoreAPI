import express from 'express'
const router = express.Router()

// multiples params
router.get('/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params
  res.json({
    categoryId,
    productsId
  })
})

export { router }
