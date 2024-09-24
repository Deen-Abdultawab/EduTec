<template>
    <!-- {{ props.course }} -->
    <article 
      class="grid grid-cols-customGrid1 desk:grid-cols-1 gap-4 border p-3 rounded-[12px] cursor-pointer hover:border-[gray] transitionItem"
      >
        <div class="rounded-l-[12px] tab2:rounded-[12px] overflow-hidden max-h-[25rem] w-full h-[15rem]">
          <img :src="props.course.image_url" alt="" class="object-cover h-full w-full">
        </div>
        <div class="flex flex-col justify-between">
            <div class="flex flex-col gap-[0.3rem]">
                <h3 class="title font-[700] text-[1.2rem] capitalize">{{ props.course?.title }}</h3>
                <p class="font-[500] text-[0.9rem]">{{ props.course?.description }}</p>
                <p class="text-[0.8rem] text-[#7e8183] font-[400]">{{ props.course?.author }}</p>
                <div class="text-[0.8rem] text-[#7e8183] font-[400] flex gap-[0.5rem]">
                  <div class="flex items-center gap-[0.2rem]"> <p class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#7b7c7e]"></p>{{props.course?.total_hours}} total time <p class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#7b7c7e]"></p></div>
                  <span>{{ props.course?.total_lectures }} lectures</span>
                  <span>All levels</span>
                </div>
            </div>
            <div class="text-[#030372] font-[700] text-[1.2rem]">
                ${{ props.course?.price }}
            </div>
        </div>
      </article>
</template>

<script setup>
const props = defineProps(['course'])

</script>

<style lang="scss" scoped>

</style>