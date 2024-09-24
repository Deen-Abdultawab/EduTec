<template>
    <dashboardLayout>
        <section class="py-8 px-6">
            <pageHeader />
            <shortLoader v-if="isLoading"/>
            <div class="mt-8 flex gap-[2.5rem] tab1:flex-col" v-else>
                <article class="flex-1 tab1:order-2">
                    <div class="courseInfo flex flex-col gap-4">
                        <h1 class="text-[1.5rem] font-[700]">{{ singleCourse?.title }} </h1>
                        <div class="flex items-center gap-4">
                            <span class="basicFlex font-[600] gap-[0.5rem] text-[0.9rem]">
                                <starIcon />
                                <h3>4.9 (264,250 ratings) </h3>
                            </span>
                            <span class="basicFlex font-[600] gap-[0.5rem] text-[0.9rem]">
                                <groupIcon />
                                <h3>{{ formatNumber(singleCourse?.students) }} students</h3>
                            </span>
                            <span class="basicFlex font-[600] gap-[0.5rem] text-[0.9rem]">
                                <academicsIcon />
                                <h3>{{ singleCourse?.author }}</h3>
                            </span>
                        </div>
                        <p class="text-[grey] text-[0.9rem] font-[500]">{{ singleCourse?.description }}</p>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-[1.5rem] font-[700]">Course content</h3>
                        <div class="flex justify-between text-[grey] text-[0.9rem] font-[500]">
                            <div class="font-[400] flex gap-[0.5rem]">
                                <span class="capitalize">{{ singleCourse?.course_contents?.length }} sections</span>
                                <div class="flex items-center gap-[0.2rem]"> 
                                    <p class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#7b7c7e]">

                                    </p>{{ singleCourse?.total_lectures }} lectures <p class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#7b7c7e]"></p></div>
                                <span>{{ singleCourse?.total_hours }} total length</span>
                            </div>
                            <div>
                                <h3 class="text-[blue] underline cursor-pointer" @click="showAllModal">Expand all sections</h3>
                            </div>
                        </div>
                        <div class="mt-[0.5rem]">
                            <article class="text-[0.9rem] border p-[0.7rem] transitionItem" v-for="(content, index) in singleCourse?.course_contents"
                            :class="index === 0? 'rounded-t-[12px]': ''"
                            >
                                <div class="basicFlex justify-between mb-[0.7rem]">
                                    <div class="basicFlex gap-[0.5rem]">
                                        <arrowIcon class="cursor-pointer transitionItem" 
                                        :class="isModalOpen(index)? 'rotate-[180deg]': ''"
                                        @click="toggleModal(index)"/>
                                        <h3 class="text-[#000] font-[500]">{{ content?.section_title }}</h3>
                                    </div>
                                    <div class="border-2 border-[grey] rounded-full w-6 h-6"></div>
                                </div>
                                <div class="modal transitionItem overflow-hidden"
                                :class="isModalOpen(index)? 'h-auto': 'h-0'"
                                >
                                    <ul class="pl-6 text-[grey] flex flex-col gap-[0.5rem]">
                                        <li 
                                        class="basicFlex justify-between"
                                        v-for="item in content?.contents"
                                        >
                                            <div class="basicFlex gap-[0.5rem]">
                                                <playIcon class="w-[1.2rem]"/>
                                                <readIcon class="hidden w-[1.2rem]"/>
                                                <h3>{{ item.replace(/\s*\(.*?\)\s*/g, '').trim() }}</h3>
                                            </div>
                                            <h3>{{ item.match(/\((.*?)\)/)[1] }}</h3>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </article>
                <article class="w-[40%] border p-6 rounded-[12px] flex flex-col gap-4 tab1:flex-row tab1:w-full tab1:gap-8  mob:flex-col mob:p-4">
                    <div class="flex flex-col gap-4 tab1:w-[50%] mob:w-full">
                        <div class="rounded-[12px] overflow-hidden tab1:h-[11.84rem] mob:h-full max-h-[18rem]">
                            <img :src="singleCourse?.image_url" alt="">
                        </div>
                        <div class="flex justify-between">
                            <div class="basicFlex font-[700]">
                                <h3 class=font-[700]>$<span class="font-[700] text-[1.3rem]">{{ singleCourse?.discounted_price }}</span> </h3>
                                <h3 class="text-[1rem] ml-[0.5rem] text-[grey] line-through">${{ singleCourse?.price }}</h3>
                            </div>
                            <h3 class="font-[700] text-[red] text-[1rem]">{{ singleCourse?.discount_percentage}}% off</h3>
                        </div>
                        <div class="flex justify-between gap-4 border-b pb-4">
                            <button class="bg-[blue] text-white w-full flex-1 p-[0.5rem] rounded-[12px]">Buy Now</button>
                            <div class="border p-[0.6rem] border-[grey] rounded-[12px]">
                                <favoriteIcon />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-[600] text-[0.9rem] mb-4">This course includes</h3>
                        <ul class="courseFeatures flex flex-col gap-[0.5rem]">
                            <li>
                                <playIcon />
                                <h3>{{ singleCourse?.on_demand_video }} hours on-demand video</h3>
                            </li>
                            <li>
                                <downloadIcon />
                                <h3>{{ singleCourse?.downloadable_resources }} downloadable resources</h3>
                            </li>
                            <li>
                                <phoneIcon />
                                <h3>
                                    Access on mobile and TV
                                </h3>
                            </li>
                            <li>
                                <readIcon />
                                <h3>{{ singleCourse?.articles }} articles</h3>
                            </li>
                            <li>
                                <codeIcon />
                                <h3>{{ singleCourse?.coding_exercises }} coding exercises</h3>
                            </li>
                            <li>
                                <approvalIcon class="rotate-[180deg]"/>
                                <h3>Certificate of completion</h3>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

    </dashboardLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import dashboardLayout from '@/components/ui/dashboardLayout.vue'
import { storeToRefs } from "pinia";
import { useCourseStore } from "@/stores/courses"
import { useRoute } from 'vue-router';
import pageHeader from '@/components/ui/pageHeader.vue';
import starIcon from '@/components/icons/starIcon.vue';
import groupIcon from '@/components/icons/groupIcon.vue';
import academicsIcon from '@/components/icons/academicsIcon.vue';
import arrowIcon from '@/components/icons/arrowIcon.vue';
import readIcon from '@/components/icons/readIcon.vue';
import playIcon from '@/components/icons/playIcon.vue';
import favoriteIcon from '@/components/icons/favoriteIcon.vue';
import downloadIcon from '@/components/icons/downloadIcon.vue';
import phoneIcon from '@/components/icons/phoneIcon.vue';
import codeIcon from '@/components/icons/codeIcon.vue';
import approvalIcon from '@/components/icons/approvalIcon.vue';
import shortLoader from "@/components/ui/ShortLoader.vue"

const courseStore = useCourseStore()
const {courses, singleCourse} = storeToRefs(courseStore)
const route = useRoute()
const isLoading = ref(false)
const activeIndex = ref(false)

const toggleModal = (index)=>{
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
}

const isModalOpen = (index) => {
    return activeIndex.value === index;
};

const showAllModal = ()=>{
    console.log(true)
}

function formatNumber(value) {
  if (value === '') return '';
  return new Intl.NumberFormat().format(value);
}

const handleGetSingleCourse = async ()=>{
    isLoading.value = true
    let id = Number(route.params.slug)
    // let payload = {
    //   id: Number(route.params.slug)
    // }
    try {
        // courses.value?.courses?.forEach(course=>{
        //     if(course.id === id){
        //         singleCourse.value = course
        //     }
        // })
        await courseStore.handleGetSingleCourse(id)
        console.log(singleCourse.value)
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
}


onMounted(async ()=>{
    await handleGetSingleCourse()
})

</script>

<style lang="scss" scoped>

</style>