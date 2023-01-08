import Axios from 'axios'

import { API_URL } from '@config/constants'
import { notificationsStore } from '@stores/notifications'

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    const message = err.response?.data?.message || err.message
    notificationsStore.getState().showNotification({
      type: 'error',
      title: 'Error',
      duration: 5000,
      message,
    })

    return Promise.reject(err)
  }
)
