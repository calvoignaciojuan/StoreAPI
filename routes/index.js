import { router as productsRouter } from './products.js'
import { router as usersRouter } from './users.js'
import { router as categoriesRouter } from './categories.js'
import express from 'express'

function routerApp (app) {
  const router = express.Router()
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
  app.use('/api/v1', router)
}

export { routerApp }
