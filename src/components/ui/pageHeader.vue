<template>
   <header class="flex items-center gap-[0.5rem] text-[0.7rem] font-[700] mb-4">
      <h1 :class="route.name !== 'courses'? 'text-[grey]': 'text-[#000]'">Top Courses</h1>
      <div class="flex items-center gap-[0.5rem] font-[700]" v-if="route.name === 'courseDetail'">
          <span>/</span>
          <h3
          >UI/UX Designing</h3>
      </div>
    </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()

</script>

<style lang="scss" scoped>

</style>