<script setup>
import { productStore } from './stores/products'
import { useRouter } from 'vue-router'
import CartIcon from '../public/cart.png'

const store = productStore()
const router = useRouter()
</script>

<template>
  <div>
    <header>
      <div class="header-nav">
        <div class="header-nav-title">VUE-MART</div>
        <div class="cart-items" @click="router.push({ name: 'Cart' })">
          <img :src="CartIcon" alt="cart" width="30" height="30" />
          <span class="cart-text">{{ store.cart.length }}</span>
        </div>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

.header-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.header-nav-title {
    font-size: 30px;
    font-weight: bold;
}

.cart-text {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

.cart-items {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}
</style>
