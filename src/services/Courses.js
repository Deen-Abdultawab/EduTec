import axios from "axios";

export const getAllCourses = async ()=>{
    try {
        let res = await axios.get(`https://course-api-mock.vercel.app/courses`, {
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

export const getSingleCourse = async (payload) => {
    try {
      let res = await axios.get('https://course-api-mock.vercel.app/', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload  // payload is passed in the `data` field
      });
      console.log(res.data);
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
