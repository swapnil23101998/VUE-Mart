<template>
  <div>
  <div class="header-screen">
        <div class="header-screen-header">VUE-Mart
          <div>Discover Your Style: Elevate Your Shopping Experience 
            with Unparalleled Choices 
            and Unbeatable Deals</div>
        </div>
        <div class="header-screen-image">
          <img :src="HeaderScreen" alt="header-screen" width="100%" height="100%" />
        </div>
      </div>
  <div className="discover-item">Discover Fantastic Items Below..!!</div>
  <div class="products-list">
    <div className="loader" v-if="!store.products.length">Loading...</div>
    <div
      class="product"
      v-for="product in store.products"
      :key="product.id"
      @click="goToProductPage(product.id)"
      v-else
    >
      <div class="item-image"><img :src="product.thumbnail" /></div>
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CatalogView',
  data() {
    return {
      productsList: []
    }
  }
})
</script>

<script setup>
import { onMounted } from 'vue'
import { productStore } from '../stores/products'
import { useRouter } from 'vue-router'
import HeaderScreen from '../../public/header-screen.png'

const store = productStore()
const router = useRouter()

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id: id } })
}

onMounted(async () => {
  console.log('CatalogView mounted')
  await store.fetchProductsFromDB()
})
</script>

<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product {
  flex-basis: 30%;
  border: 1px solid grey;
  padding: 10px;
  margin: 20px 10px 20px 10px;
  border-radius: 10px;
}

.product img {
  width: 70%;
  height: 200px;
}

.header-screen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.header-screen-image {
  flex-basis: 100%;
}

.header-screen-header {
  flex-basis: 100%;
  font-size: 20px;
  font-weight: bold;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.discover-item {
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 50px;
  color: peru;
}

.item-image {
  display: flex;
  justify-content: center;
}
</style>
