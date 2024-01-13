<template>
  <div>
    <div class="product">
      <div class="product-image">
        <img :src="selectedProduct.thumbnail" />
      </div>
      <div class="product-details">
        <p><span class="heading">Brand:</span> {{ selectedProduct.brand }}</p>
        <p><span class="heading">Description:</span> {{ selectedProduct.description }}</p>
        <h2><span class="heading">Price:</span>${{ selectedProduct.price }}</h2>
        <button @click="addToCarts">Add to Cart</button>
      </div>
    </div>
    <button @click="router.push({ name: 'Catalog' })">Catalog</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductDetails'
})
</script>

<script setup>
import { computed } from 'vue'
import { productStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'

const store = productStore()
const route = useRoute()
const router = useRouter()

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === parseInt(route.params.id))
})

const addToCarts = () => {
  store.addToCart(selectedProduct.value)
}
</script>

<style scoped>

.product-image {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.heading {
  font-size: 20px;
  font-weight: bold;
}

.product-details {
  padding-top: 40px;
}

</style>
