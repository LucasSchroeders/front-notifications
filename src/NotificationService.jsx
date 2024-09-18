import axios from "axios"
import { useNavigate } from 'react-router-dom'

async function getNotifications() {
    const response = await axios.get("http://localhost:8080/notifications")
    return response.data || []
}

async function createNotification(data) {
    const navigate = useNavigate()
    const axiosConfig = {headers: {'Content-Type': 'application/json'}}

    await axios.post('http://localhost:8080/notifications', JSON.stringify(data), axiosConfig).then(() => {
        navigate('/', {replace: true})
    })
}

export {
    getNotifications,
    createNotification
}