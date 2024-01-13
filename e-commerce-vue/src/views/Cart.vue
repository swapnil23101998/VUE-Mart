<template>
  <div>
    <div v-if="!store.cart.length">
      <h1>...Empty Cart...</h1>
      <button @click="router.push({ name: 'Catalog' })">Back to Catalog</button>
    </div>
    <div class="cart-items" v-else>
      <div class="cart-item" v-for="item in store.cart" :key="item.id">
        <div class="cart-item-image"><img :src="item.thumbnail" /></div>
        <div class="cart-item-detail">
          <p>Brand: {{ item.brand }}</p>
          <p>Price: ${{ item.price }}</p>
        </div>
        <div class="cart-item-button">
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart'
})
</script>

<script setup>
import { productStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = productStore()

const removeFromCart = (id) => {
  store.removeFromCart(id)
}
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-around;
  gap: 50px;
}

.cart-item-image {
  padding: 10px;
  width: 30px;
  height: 30px;
}

.cart-item-detail {
  flex-basis: 100%;
}

.cart-item-button {
  flex-basis: 100%;
}
</style>
