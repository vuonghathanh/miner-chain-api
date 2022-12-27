import axiosClient from "../config/axiosClient";


const checkHealth = async () => {
    const url = ''
    return await axiosClient.get(url)
}

export default checkHealth;