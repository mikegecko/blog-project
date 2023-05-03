
export const createUser = async (username, password, email, name, isAdmin) => {
    try{
        const response = await axios.post('/api/signup', {username, password, email, name, isAdmin});
    }
    catch(error){
        console.error(error);
    }
};

export const  updateUser = async (username, password, email, name, isAdmin) => {};

export const deleteUser = async (username) => {};

export const login = async (username, password) => {};

export const logout = async () => {};

export const getUsers = async () => {};

export const getUser = async () => {};