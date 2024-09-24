<script setup>
import dashboardLayout from '@/components/ui/dashboardLayout.vue'
import comingSoon from "@/components/ui/comingSoon.vue"
import { useRoute, useRouter } from "vue-router"
import { storeToRefs } from "pinia";
import { useCourseStore } from "@/stores/courses"
import { ref, computed, onMounted, defineAsyncComponent, watch } from "vue";
import pageHeader from '@/components/ui/pageHeader.vue';
import courseCard from '@/components/ui/courseCard.vue';
import shortLoader from '@/components/ui/ShortLoader.vue'

const courseStore = useCourseStore()
const {courses} = storeToRefs(courseStore)
const route = useRoute()
const router = useRouter()
const isLoading = ref(false)

const handleGetCourses = async ()=>{
    isLoading.value = true
    try {
        await courseStore.handleGetAllCourses()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
}

const routeToDetails = (id)=>{
    router.push({ name: 'courseDetail', params: { slug: id}})
}


onMounted(async ()=>{
    await handleGetCourses()
})

</script>

<template>
 <dashboardLayout>
    <section class="py-8 px-6">
    <pageHeader class=""/>
    <shortLoader v-if="isLoading"/>
    <div v-else>
      <div class="course-lists flex flex-col gap-6">
       <courseCard 
        v-for="item in courses"
        :course="item"
        @click="routeToDetails(item.id)"
       />
      </div>
    </div>

  </section>
 </dashboardLayout>
</template>
