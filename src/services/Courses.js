import axios from "axios";
let url = `http://localhost:3000/courses`
let liveUrl = `https://course-api-mock.vercel.app/courses`

export const getAllCourses = async ()=>{
    try {
        let res = await axios.get(`http://localhost:3000/courses`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(res.data)
        return res.data
    } catch (error) {
     console.log(error)   
    }
}

export const getSingleCourse = async (id) => {
    try {
        let res = await axios.get(`http://localhost:3000/courses/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
        });
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
};