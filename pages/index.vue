<template>
  <div class="home-page">
    <h1 class="header">Look at these gifs!</h1>

    <Loader v-if="isLoading" />

    <ErrorMessage v-else-if="errorMessage">{{ errorMessage }}</ErrorMessage>

    <ul v-else class="list">
      <li v-for="(item) in data" :key="item.id" class="list-item">
        <img class="image" :src="item.img" />
        <div class="title">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getGifs } from '@/api/getGifs'

export default defineComponent({
  components: {
    ErrorMessage: defineAsyncComponent(() => import('@/components/ErrorMessage.vue'))
  },
  data() {
    return {
      isLoading: false,
      errorMessage: null,
      data: []
    }
  },
  methods: {
    async handleGetGifs() {
      this.isLoading = true

      try {
        const result = await getGifs()

        this.data = result.data
      } catch (error) {
        this.errorMessage = error
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted() {
    this.handleGetGifs()
  }
})
</script>

<style>
.header {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 2rem;
}

.list {
  display: block;
  margin: 0;
  padding: 0;
}

.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.4rem;
  background-color: #41B883
}

.list-item + .list-item {
  margin-top: 0.8rem;
}

.image {
  max-height: 10rem;
}

.title {
  margin-top: 0.8rem;
  color: #FEF6F6;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>