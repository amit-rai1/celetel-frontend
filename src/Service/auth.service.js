
import axios from 'axios';
// import { API_BASEURL } from '../../environment';
import { API_BASEURL } from '../environment';
import { Form } from 'react-bootstrap';
export const loginAuth = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASEURL}/api/admin/authLogin`, {username, password });

    console.log(response,"res")
    return response;
  } catch (error) {
    throw error;
  }
};

 export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASEURL}/api/user/createUser`, userData);
    console.log("response",response.data)
    return response.data;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

// Create a file named apiService.js

const getUserList = (searchTerm) => {
  let url = `${API_BASEURL}/api/user/getUserList`;
  if (searchTerm) {
    url += `?name=${searchTerm}`;
  }
  
  return axios.get(url);
};

export default getUserList;

// const getUserList = (token) => {
//   axios.interceptors.request.use((config) => {
//     console.log(config.headers); // Log request headers
//     return config;
//   }, (error) => {
//     return Promise.reject(error);
//   });

//   return axios.get('http://localhost:9800/api/user/getUserList', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
// export default getUserList;


// export const deleteUser = async (ids) => {
//   console.log(ids,"ids")
//   try {
//     const response = await axios.post(`${API_BASEURL}/api/addData/deleteData`, { ids });
//     console.log(response,"respoid")
//     console.log(response.data,"API service res")

//     return response.data; // Make sure you return response.data
//   } catch (error) {
//     throw error;
//   }
// };

export const deleteUser = async (ids) => {
  console.log(ids,"ids")
  try {
    const response = await axios.delete(`${API_BASEURL}/api/addData/deleteData`, { data: { ids } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

 export const getAllData = async (params) => {
  try {
    const response = await axios.get(`${API_BASEURL}/api/addData/getAllData`, {
      params: params
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const addSimData = async (simData) => {
  try {
    const response = await axios.post(`${API_BASEURL}/api/addData/addData`, simData);
    console.log(response,"response81")
    return response.data;
  } catch (error) {

    throw new Error('Error adding sim data');
  }
};

export const updateData = async (id, data,token) => {
  try {
    const response = await axios.put(`${API_BASEURL}/api/addData/updateData/${id}`, data,{
      headers: {
        Authorization: `Bearer ${token}` // Pass the token in the Authorization header
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSimStatistics = async () => {
  try {
    const response = await axios.get(`${API_BASEURL}/api/addData/getSimStatistics`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 export const addSenderID = async (SenderID) => {
  try {
    const response = await axios.post(`${API_BASEURL}/api/addSenderId`, { SenderID });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSenderId = async (page, limit) => {
  try {
    const response = await axios.get(`${API_BASEURL}/api/getSenderId`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getDataById = async (id) => {
  console.log(id, "id137"); // Log the ID
  try {
    const response = await axios.get(`${API_BASEURL}/api/addData/getDataById/${id}`);
    console.log(response.data, "response data"); // Add this line
    return response.data;
  } catch (error) {
    throw error;
  }
};


 export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_BASEURL}/api/addExcelData`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteSenderID = async (ids) => {
  console.log(ids,"ids")
  try {
    const response = await axios.delete(`${API_BASEURL}/api/deleteData`, { data: { ids } });
    return response.data;
  } catch (error) {
    throw error;
  }
};



// export const getAllUsers = async (params) => {
//   try {
//     const response = await axios.get(`${API_BASEURL}/api/userRoute/userList`, {
//       params: params
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching data');
//   }
// };
export const getAllUsers = async () => {
  try {
    const token = localStorage.getItem('token'); // Get the admin token from localStorage
    console.log("token",token)

    const response = await axios.get(`${API_BASEURL}/api/userRoute/userList`, {
      headers: {
        Authorization: `Bearer ${token}` // Set the Authorization header with the token
      }
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

export const createUsers = async (formData, token) => {
  try {
    const response = await axios.post(`${API_BASEURL}/api/userRoute/createUsers`, formData, {
      headers: {
        Authorization: `Bearer ${token}` // Pass the token in the Authorization header
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};



export const setPermissions = async (userId, editableFields) => {
  console.log(userId,"userId")
  try {
    const response = await axios.post(`${API_BASEURL}/api/set-permissions`, {
      userId,
      editableFields,
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


// export const getUserPermissions = async (userId) => {
//   try {
//     const response = await axios.get(`http://localhost:7600/api/getUserPermissions/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getUserPermissions = async (userId) => {
  try {
    const response = await axios.get(`${API_BASEURL}/api/getUserPermissions/${userId}`);

    if (response.status === 200) {
      return {
        status: response.status,
        message: response.data.message,
        permissions: response.data.permissions,
      };
    } else {
      return {
        status: response.status,
        message: 'Failed to fetch user permissions',
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: 'An error occurred while fetching user permissions.',
    };
  }
};



export const  sendVerificationEmail = async (email) => {
  console.log(email,"email")
    try {
      const response = await axios.post(`${API_BASEURL}/api/client/sendmail`, { email });
      console.log(response,"responseservice");

      if (response.data.success) {
        return { success: true, message: response.data.msg };
      } else {
        return { success: false, message: response.data.msg };
      }
    } catch (error) {
      console.error('Error sending verification email:', error);
      return { success: false, message: 'Failed to send verification email. Please try again.' };
    }
  }


  export const verifyOtp = async (enteredOTP) => {
    try {
      console.log('Request Data:', { enteredOTP });
  
      const response = await axios.post(`${API_BASEURL}/api/client/verifyOtp`, { enteredOTP });
  
      if (response.data.success) {
        return { success: true, message: response.data.msg };
      } else {
        return { success: false, message: response.data.msg };
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return { success: false, message: 'Failed to verify OTP. Please try again.' };
    }
  };
  

  export const clientSignup = async (fullName, email, role) => {
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/signup`, {
            fullName,
            email,
            role
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg || 'Failed to register client');
    }
};