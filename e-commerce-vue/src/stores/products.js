import { defineStore } from 'pinia'

export const productStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    async fetchProductsFromDB() {
      const response = await fetch('https://dummyjson.com/products')
      const res = await response.json()
      this.products = res.products.filter((item) => {
        return item.brand !== 'luxury palace' && item.brand !== 'fauji';
      });
    },
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
