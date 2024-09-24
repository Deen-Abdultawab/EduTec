import { defineStore } from 'pinia';
import { ref } from 'vue'
import { getAllCourses, getSingleCourse } from '@/services/Courses';

export const useCourseStore = defineStore('courses', ()=>{
    const courses = ref([])
    const singleCourse = ref([])

    const handleGetAllCourses = async ()=>{
       try {
        courses.value = await getAllCourses()
        return courses.value
       } catch (error) {
        console.log(error)
       }
    }

    const handleGetSingleCourse = async (payload)=>{
        try {
            singleCourse.value = await getSingleCourse(payload)
            return singleCourse.value
        } catch (error) {
            console.log(error)
        }
    }

    return {
        courses,
        handleGetAllCourses,
        handleGetSingleCourse,
        singleCourse
    }
})