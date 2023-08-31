import express from 'express'
const app = express()
const port = 3000
// ruta raiz
app.get('/', (req, res) => {
  res.send('Hello from sever')
})
// products
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: 656
    },
    {
      name: 'producto 2',
      price: 1000
    }])
})
// params
app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id,
    name: 'product name',
    price: 666
  })
})
// multiples params
app.get('/category/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params
  res.json({
    categoryId,
    productsId
  })
})
// listen server port
app.listen(port, () => {
  console.log('servidor corriento en ' + port)
})
