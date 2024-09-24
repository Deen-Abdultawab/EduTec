<template>
    <div class="w-[full] mx-auto p-8 justify-end hidden tab2:flex sticky top-0 bg-white">
        <menuIcon1 class="cursor-pointer" @click="handleNav"/>
    </div>
    <div class="mobileNav overlay fixed top-0 left-0 w-full h-full bg-transparent z-[99] backdrop-blur-[4px]" v-if="showNav">
        <div class="sidebar bg-white max-w-[90%] py-8 h-screen border border-r-[#dfe3e7] overflow-hidden transitionItem"
        :class="showNav? 'w-[400px]': 'w-0'"
        >
        <div class="mb-[3rem] flex justify-between px-6">
            <div class="logo mb-[3rem]">
                <img src="" alt="">
                <h3 class="font-bold italic">EduTec</h3>
            </div>
            <div>
                <closeIcon class="cursor-pointer" @click="closeNav"/>
            </div>
        </div>
        <ul>
            <li @click="handleNav">
                <router-link
                    to="/"
                    class=" transitionItem hover:!bg-[#dfe3e7]"
                    :class="
                    route.name === 'home' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : '!text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'home' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <menuIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Home</span
                    >
                </router-link>
            </li>
            <li @click="handleNav">
                <router-link
                    to="/courses"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'courses' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : '!text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'courses' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <courseIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Courses</span
                    >
                </router-link>
            </li>
            <li @click="handleNav">
                <router-link
                    to="/achievements"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'achievements' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'achievements' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <achievementsIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Achievements</span
                    >
                </router-link>
            </li>
            <li @click="handleNav">
                <router-link
                    to="/messages"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                     route.name === 'messages' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'messages' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <chatIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >messages</span
                    >
                </router-link>
            </li>
            <li @click="handleNav">
                <router-link
                    to="/wishlists"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'wishlists' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'wishlists' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <favoriteIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >wishlists</span
                    >
                </router-link>
            </li>
            <li @click="handleNav">
                <router-link
                    to="/notifications"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'notifications' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'notifications' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <notificationsIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >notifications</span
                    >
                </router-link>
            </li>
        </ul>

    </div>

    </div>
   <section class="grid grid-cols-customGrid tab2:grid-cols-1">
    <div class="sidebar py-8 h-screen border border-r-[#dfe3e7] tab2:hidden">
        <div class="logo pl-6 mb-[3rem]">
            <img src="" alt="">
            <h3 class="font-bold italic">EduTec</h3>
        </div>
        <ul>
            <li>
                <router-link
                    to="/"
                    class=" transitionItem hover:!bg-[#dfe3e7]"
                    :class="
                    route.name === 'home' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : '!text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'home' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <menuIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Home</span
                    >
                </router-link>
            </li>
            <li>
                <router-link
                    to="/courses"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'courses' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : '!text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'courses' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <courseIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Courses</span
                    >
                </router-link>
            </li>
            <li>
                <router-link
                    to="/achievements"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'achievements' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'achievements' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <achievementsIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >Achievements</span
                    >
                </router-link>
            </li>
            <li>
                <router-link
                    to="/messages"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                     route.name === 'messages' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'messages' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <chatIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >messages</span
                    >
                </router-link>
            </li>
            <li>
                <router-link
                    to="/wishlists"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'wishlists' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'wishlists' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <favoriteIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >wishlists</span
                    >
                </router-link>
            </li>
            <li>
                <router-link
                    to="/notifications"
                    class="hover:bg-[#dfe3e7] transitionItem"
                    :class="
                    route.name === 'notifications' ? 'bg-none text-[#000] hover:!bg-[#dfe3e7]' : 'text-[#5f6368] hover:text-[#000]'
                    "
                >
                    <div
                    :class="route.name === 'notifications' ? '!text-[blue]' : 'text-[#5f6368]'"
                    class="justify-center flex items-center rounded-[5px] h-[40px] w-[40px]"
                    >
                    <notificationsIcon class="!text-inherit"/>
                    </div>
                    <span class="place-self-center text-[16px] font-Satoshi500 leading-[20.23px]"
                    >notifications</span
                    >
                </router-link>
            </li>
        </ul>

    </div>
    <div class="h-[100vh] overflow-auto tab2:h-auto">
        <slot></slot>
    </div>
   </section>
</template>

<script setup>
import menuIcon from "@/components/icons/menuIcon.vue"
import courseIcon from "@/components/icons/coursesIcon.vue"
import achievementsIcon from "@/components/icons/achievementIcon.vue"
import menuIcon1 from "@/components/icons/menuIcon1.vue"
import chatIcon from "@/components/icons/chatIcon.vue"
import favoriteIcon from "@/components/icons/favoriteIcon.vue"
import notificationsIcon from "@/components/icons/notificationIcon.vue"
import { useRoute } from "vue-router";
import { ref } from "vue"
import closeIcon from "../icons/closeIcon.vue"

const route = useRoute()
const showNav = ref(false)

const handleNav = ()=>{
    if(showNav.value === false){
        showNav.value = true
    }
}
const closeNav = ()=>{
    showNav.value = false
}

</script>

<style lang="scss" scoped>

</style>