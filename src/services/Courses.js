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


// const axios = require('axios');
// let data = JSON.stringify({
//   "id": 1
// });

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://course-api-mock.vercel.app/',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
