import axios from "axios";

export const createUser = async (username, password, email, name, isAdmin) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      username,
      password,
      email,
      name,
      isAdmin,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userid, username, password, email, name, isAdmin) => {
  try {
    const response = await axios.put(`/api/auth/user/${userid}`, {
      username,
      password,
      email,
      name,
      isAdmin,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userid) => {
  try {
    const response = await axios.delete(`/api/auth/user/${userid}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    localStorage.setItem("blog-token", response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
    if(error.response){
      return error.response.data;
    } else{
      throw error;
    }
  }
};

export const adminLogin = async (username, password) => {
    try {
        const response = await axios.post("/api/auth/login-admin", {
          username,
          password,
        });
        localStorage.setItem("blog-token", response.data.token);
        return response.data;
      } catch (error) {
        console.error(error);
        if(error.response){
          return error.response.data;
        } else{
          throw error;
        }
      }
};

export const logout = async () => {
  localStorage.removeItem("blog-token");
};

export const verify = async (token) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get("/api/auth/verify", {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (token) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get("/api/auth/users", { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (userid) => {
  try {
    const response = await axios.get(`/api/auth/user/${userid}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
