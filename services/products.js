import { faker } from '@faker-js/faker'

class ProductsService {
  constructor () {
    this.products = []
    this.generate()
  }

  generate () {
    const size = 50
    for (let index = 0; index < size; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url()
      })
    }
  }

  create (data) {
    const id = faker.string.uuid()
    const newProduct = {
      id,
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find (id) {
    return this.products
  }

  findOne (id) {
    return this.products.find((item, index, arr) => {
      return (item.id === id)
    })
  }

  update (id, changes) {
    const index = this.products.findIndex((product, index, arr) => {
      return product.id === id
    })
    if (index === -1) {
      throw new Error('Product not found')
    } else {
      const productUpdated = {
        ...this.products[index],
        ...changes
      }
      this.products[index] = productUpdated
      return productUpdated
    }
  }

  delete (id) {
    const index = this.products.findIndex((product, index, arr) => {
      return product.id === id
    })
    if (index === -1) {
      throw new Error('Product not found')
    } else {
      const productDeleted = this.products.splice(index, 1)[0]
      return productDeleted
    }
  }
}
export { ProductsService }
